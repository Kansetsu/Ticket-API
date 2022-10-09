const mongoose = require('mongoose');

function mongoConnection() {
    mongoose.connect(process.env.URL).then(() => {
        console.log("Connection established!");
    }).catch((err) => {
        console.log("Error connecting: ", err);
    });
}

module.exports = mongoConnection;