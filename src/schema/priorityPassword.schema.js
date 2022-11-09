const mongoose = require('mongoose');

const prioritySchema = new mongoose.Schema({
    numberOfPassword: { type: Number, default: 0 },
    ticketWindow: { type: String, default: Math.floor(Math.random() * (5 - 1 + 1) + 1).toString()},
    dateOfAttendant: { type: String, default: new Date().toLocaleDateString("pt-BR").toString() },
    typeOfPassword: { type: String, default: 'SP' },
});

const priorityModel = mongoose.model('priorityPassword', prioritySchema);

module.exports = priorityModel