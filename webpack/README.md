# Iniciando o projeto

npm init

## Criar o webpack

touch webpack.config.js

## Instalação webpack

npm i --save-dev webpack webpack-cli

## Compilar

npm run build

## Adicionar Babel

npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

## Adicionar presets do babel

{
"presets": [
"@babel/preset-env",
"@babel/preset-react"
]
}

## Instalar React

npm i react react-dom
npm i -D babel-preset-react

## Instalar html-webpack plugin

npm i -D html-webpack-plugin html-loader

## Criando um dev server

npm i -D webpack-dev-server
