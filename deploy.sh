#!/bin/sh

# abort an error 
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekli to bypass Jekyli processing
echo > .nojekyli

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init 
git checkout -B main 
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io<REPO>
# git push -f git@github.com:Bentil4/locksluxe.git main:gh-pages

cd -
