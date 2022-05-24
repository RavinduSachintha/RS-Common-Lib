#!/bin/bash

if [ "$1" == "components" ]; then
    echo "########### cd to components direcotry ###########"
    echo
    cd ./projects/components

    echo "########### npm version update ###########"
    echo
    npm version patch

    echo "########### cd to root direcotry ###########"
    echo
    cd ../..

    echo "########### Angular Build - Components Library ###########"
    echo
    npm run build:components

    echo "########### copy npmrc file to dist directory ###########"
    echo
    cp ./.npmrc ./dist/components

    echo "########### cd to dist directory ###########"
    echo
    cd ./dist/components

    echo "########### publish to NPM registry ###########"
    echo
    npm publish --registry=https://npm.pkg.github.com/

    echo "########### delete npmrc from dist directory ###########"
    echo
    rm ./.npmrc

    echo "########### everthing sucess ###########"
fi

if [ "$1" == "demo" ]; then
    echo "########### clean docs ###########"
    echo
    rm -r ./docs

    echo "########### npm install ###########"
    echo
    npm i

    echo "########### Angular Storybook Build - Demo Project ###########"
    echo
    npm run ng -- run demo:build-storybook

    echo "########### move build files to docs ###########"
    echo
    mv ./storybook-static ./docs

    echo "########### git commit ###########"
    echo
    git add .
    git commit -m "publishing demo project"

    echo "########### npm version update ###########"
    echo
    npm version patch

    echo "########### git push ###########"
    echo
    git push origin main

    echo "########### everthing sucess ###########"
fi