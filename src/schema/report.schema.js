const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    reportDate: { type: String },
    numberOfGeneratedPasswords: { type: Number },
    numberOfAttendedPasswords: { type: Number },
    generatedPriorityPasswords: { type: Number },
    generatedGeneralPasswords: { type: Number },
    generatedExamsPasswords: { type: Number }
});

const reportModel = mongoose.model('report', reportSchema);

module.exports = reportModel;