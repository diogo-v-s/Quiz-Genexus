import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_PATH = path.join(__dirname, '..', '..', 'content', 'AdvancedCourse_Summary_pt.txt');

export function loadContent() {
  if (!fs.existsSync(CONTENT_PATH)) {
    throw new Error(`Arquivo de conteudo nao encontrado em: ${CONTENT_PATH}`);
  }
  return fs.readFileSync(CONTENT_PATH, 'utf-8');
}

export function chunkContent(text) {
  const lines = text.split('\n');
  const sections = [];
  let currentSection = null;

  const sectionHeaderRegex = /^(\d{1,2})\.\s+([A-Z][A-Z\s\(\)&,]+)$/;

  for (const line of lines) {
    const match = line.match(sectionHeaderRegex);
    if (match) {
      if (currentSection) {
        sections.push(currentSection);
      }
      currentSection = {
        topic: match[2].trim(),
        lines: [line]
      };
    } else if (currentSection) {
      currentSection.lines.push(line);
    }
  }

  if (currentSection) {
    sections.push(currentSection);
  }

  return sections.map(s => ({
    topic: s.topic,
    text: s.lines.join('\n').replace(/\f/g, '').trim()
  })).filter(s => s.text.length > 50);
}

export function getTopics() {
  const text = loadContent();
  const lines = text.split('\n');
  const topics = [];
  const regex = /^(\d{1,2})\.\s+([A-Z][A-Z\s\(\)&,]+)$/;

  for (const line of lines) {
    const match = line.match(regex);
    if (match) {
      topics.push(match[2].trim());
    }
  }

  return topics;
}
