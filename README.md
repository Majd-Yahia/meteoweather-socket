# AudioPlayer Socket Server
This project is designed to be a web socket for its counter part [AudioPlayer](https://github.com/Majd-Yahia/meteoweather-player) where both projects communicate to log the user activity on the audio player.

# Table of Contents
- Prerequisites
- Installation
- License
- Resources
- Contact

# Prerequisites
- Node v18+ [Visit Google](https://nodejs.org/en/download)
- Mongodb [Community Sever 7.0.1](https://www.mongodb.com/download-center/community/releases)

# Installation
- To run this websocket you need to install it by running the following command
```
git clone https://github.com/Majd-Yahia/meteoweather-socket.git
```

## Read this part if you are using [Windows](https://www.microsoft.com/en-jo/) Note since we are using [Mongodb](https://www.mongodb.com/download-center/community/releases) there is an extra step for mongodb server startup.
- Download the zip folder with version 7.0.1
- Extract the zip file and rename it to mongodb
- Move the newly created folder to monogodb-cli directory
- Create another directory in the same folder monogodb-cli with the name mongodb-data
- After that you need to run the following command to start the mongodb server
```
<Full Path to this executable>\mongodb-cli\bin\mongod.exe --dbpath=<Full Path to this direcotry>\mongodb-cli\mongodb-data
```

## Continue
- Go into the directory
```
cd meteoweather-socket
```
- Donwload node packages
```
npm install
```
- Start the websocket
```
npm run start
```
