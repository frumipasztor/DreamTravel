# DreamTravel website

# Backend
## Install the Backend

    cd backend
    npm install

## Create your .env file
To run the app you will need to create your .env file and use your codes in it. The env file must have the followin properties:

    PORT= "the port you want to run your application"
    MONGO_LINK= your mongo uri
    CLIENT_SECRET= your google generated client secret
    CLIENT_ID= google generated client id
    BILLINGO_API= your billingo api key (v3 version)

## Run the Backend

    node start.js

## Run the tests

    npm run test:watch

# Frontend

## Install the Frontend

    cd frontend
    npm install

## Run the Frontend

    npm start