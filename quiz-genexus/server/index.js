import express from 'express';
import cors from 'cors';
import { generateRouter } from './routes/generate.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

app.use('/api', generateRouter);

app.listen(PORT, () => {
  console.log(`Quiz GeneXus rodando em http://localhost:${PORT}`);
  console.log('Certifique-se de que o Ollama está rodando em http://localhost:11434');
});
