# DemoStatusbrew

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

#Setup

1. to build docker file -> docker build -t "nameForContainer" .
2. to run server with live reload -> docker run -v "$(pwd)":/app -p 4200:4200 nameOfContainer
3. Angular Material added inside package.json as soon as npm install runs all the packages will be downloaded
4. created a short quick demo for the filter reply concept
5. instead of popover a dynamic card has been used just for demo purposes
6. to start with filteration, use # in the begining of the word e.g. #good, #bad, #awesome
7. files written are ->
   - app.component.html
   - app.component.ts
   - app.component.scss
   - style.scss
   - reply.model.ts
   - reply.interface.ts
   - dockerFile
   - dockerignore
