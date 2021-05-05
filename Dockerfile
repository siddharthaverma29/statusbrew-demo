# Specify a base image
FROM node

WORKDIR /app

COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli
# RUN npm install @angular/material
RUN npm install --save @angular-devkit/build-angular

# add app
COPY . /app

EXPOSE 4200

# Default command
CMD ng serve --host 0.0.0.0 --poll






