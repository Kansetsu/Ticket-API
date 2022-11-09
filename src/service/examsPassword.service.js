const examsPasswordModel = require('../schema/examsPassword.schema');

const examsPasswordService = {
    registerExamsPassword: (data) => {
        return examsPasswordModel.create(data);

    },

    getAllExamsPasswords: () => {
        return examsPasswordModel.find();

    },

    getExamsPasswordByDate: (date) => {
        return examsPasswordModel.findOne(date);
    },

    deleteExamsPassword: (date) => {
        return examsPasswordModel.deleteOne(date);
    },
    updateExamsPassword: (date, update) => {
        return examsPasswordModel.updateOne(date, update, { new: true });
    }
}

module.exports = examsPasswordService;