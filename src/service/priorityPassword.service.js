const priorityPasswordModel = require('../schema/priorityPassword.schema');

const priorityPasswordService = {
    registerPriorityPassword: (data) => {
        return priorityPasswordModel.create(data);

    },

    getAllPriorityPasswords: () => {
        return priorityPasswordModel.find();

    },

    getPriorityPasswordByDate: (date) => {
        return priorityPasswordModel.findOne(date);
    },

    deletePriorityPassword: (date) => {
        return priorityPasswordModel.deleteOne(date);
    },
    updatePriorityPassword: (date, update) => {
        return priorityPasswordModel.updateOne(date, update, { new: true });
    }
}

module.exports = priorityPasswordService;