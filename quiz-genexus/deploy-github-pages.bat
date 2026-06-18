@echo off
echo ============================================
echo  Quiz GeneXus Advanced - Deploy para GitHub Pages
echo ============================================
echo.
echo 1. Crie um repositorio no GitHub:
echo    https://github.com/new
echo.
echo 2. Execute:
echo    git init
echo    git add .
echo    git commit -m "Initial commit"
echo    git remote add origin https://github.com/SEU_USUARIO/quiz-genexus.git
echo    git push -u origin main
echo.
echo 3. No GitHub, va em Settings ^> Pages
echo    - Source: Deploy from a branch
echo    - Branch: main, folder: /public
echo    - Salvar
echo.
echo 4. Pronto! Seu quiz estara em:
echo    https://SEU_USUARIO.github.io/quiz-genexus
echo.
echo ============================================
echo  Para rodar LOCALMENTE com backend:
echo    npm start
echo    Abra http://localhost:3000
echo ============================================
pause
