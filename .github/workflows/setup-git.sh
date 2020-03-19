#!/bin/sh

git config --global credential.helper store
echo -e "https://${GITHUB_TOKEN}:x-oauth-basic@github.com\n" > $HOME/.git-credentials
git config --global user.email "capsulecatgames@gmail.com"
git config --global user.name "Capsule Cat CI"