const generalPasswordModel = require('../schema/generalPassword.schema');

const generalPasswordService = {
    registerGeneralPassword: (data) => {
        return generalPasswordModel.create(data);

    },

    getAllGeneralPasswords: () => {
        return generalPasswordModel.find();

    },

    getGeneralPasswordByDate: (date) => {
        return generalPasswordModel.findOne(date);
    },

    deleteGeneralPassword: (date) => {
        return generalPasswordModel.deleteOne(date);
    },
    updateGeneralPassword: (date, update) => {
        return generalPasswordModel.updateOne(date, update, { new: true });
    }
}

module.exports = generalPasswordService;