@echo off
echo ============================================
echo  Quiz GeneXus Advanced - Deploy para GitHub Pages
echo ============================================
echo.
echo 1. Crie um repositorio no GitHub:
echo    https://github.com/new
echo    Nome: quiz-genexus
echo.
echo 2. Execute no terminal:
echo.
echo    cd C:\KBs\Quiz-Estudos\quiz-genexus
echo    git init
echo    git add .
echo    git commit -m "Initial commit"
echo    git remote add origin https://github.com/diogo-v-s/quiz-genexus.git
echo    git push -u origin main
echo.
echo 3. No GitHub, va em:
echo    Settings ^> Pages ^> Source: "Deploy from a branch"
echo    Branch: main, Folder: / (root)
echo    Clique em Salvar
echo.
echo 4. Pronto! Acesse:
echo    https://diogo-v-s.github.io/quiz-genexus
echo.
echo ============================================
echo  Para rodar LOCALMENTE:
echo    npm start
echo    Abra http://localhost:3000
echo ============================================
pause
