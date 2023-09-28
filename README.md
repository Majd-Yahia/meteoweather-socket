# AudioPlayer Socket Server
This project is designed to be a web socket for its counter part [AudioPlayer](https://github.com/Majd-Yahia/meteoweather-player) where both projects communicate to log the user activity on the audio player.

# Table of Contents
- Prerequisites
- Installation
- API
- Resources
- Contact
- License

# Prerequisites
- [Node v18+ ](https://nodejs.org/en/download)
- [Mongodb](https://www.mongodb.com/download-center/community/releases)

# Installation
- Clone the git repo
```
git clone https://github.com/Majd-Yahia/meteoweather-socket.git
```

## Read this part if you are using [Windows](https://www.microsoft.com/en-jo/) Note since we are using [Mongodb](https://www.mongodb.com/download-center/community/releases) there is an extra step for mongodb server startup.
- Download the zip folder with version 7.0.1
- Extract the zip file and rename it to mongodb
- Move the newly created folder to [monogodb-cli](/mongodb-cli/) directory
- Create another directory in the same folder [monogodb-cli](/mongodb-cli/) with the name mongodb-data
- After that you need to run the following command in a new terminal to start the mongodb server
```
<Full Path to this executable>\mongod.exe --dbpath=<Full Path to this direcotry>\mongodb-data
```
## Important Note
Please make sure the [This Project](https://github.com/Majd-Yahia/meteoweather-socket) is started and running on **Port:3000** before you start [Audio Player](https://github.com/Majd-Yahia/meteoweather-player.git)

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

# API
There is few API endpoints along side the socket for endpoints use the [Postman Collection](./Meteoweather%20Server.postman_collection.json), 
for the socket you need to connect to ``` ws://localhost:3000/ ```

# Resources
- [Mongoose Guide](https://mongoosejs.com/docs/guide.html)
- [Express Guide](https://expressjs.com/en/starter/installing.html)

# Contact
You can reach me out by my email [Email](mailto:majd.m4a4@gmail.com) or by [LinkedIn](https://www.linkedin.com/in/majd-yahia/) 

# License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
