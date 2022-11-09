const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    reportDate: { type: String, default: new Date().toLocaleDateString("pt-BR").toString() },
    numberOfGeneratedPasswords: { type: Number },
    numberOfAttendedPasswords: { type: Number },
    generatedPriorityPasswords: { type: Number },
    generatedGeneralPasswords: { type: Number },
    generatedExamsPasswords: { type: Number },
    attendedPriorityPasswords: { type: Number },
    attendedGeneralPasswords: { type: Number },
    attendedExamsPasswords: { type: Number },
});

const reportModel = mongoose.model('report', reportSchema);

module.exports = reportModel;