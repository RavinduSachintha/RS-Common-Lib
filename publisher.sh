#!/bin/bash

if [ "$1" == "components" ]; then
    echo "########### Angular Build - Components Library ###########"
    echo
    npm run build $1 --prod

    echo "########### copy npmrc file to dist directory ###########"
    echo
    cp ./.npmrc ./dist/components

    echo "########### cd to dist directory ###########"
    echo
    cd ./dist/components

    echo "########### publish to NPM registry ###########"
    echo
    npm publish

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

    echo "########### git commit & push ###########"
    echo
    git add .
    git commit -m "publishing demo project"
    git push origin main

    echo "########### everthing sucess ###########"
fi