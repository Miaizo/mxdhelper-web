@echo off
:: build
call npm run build
:: delete docs folder
rd/s/q docs
:: rename dist -> docs
ren dist docs
::git add .
::git commit -m "auto commit"
::git push