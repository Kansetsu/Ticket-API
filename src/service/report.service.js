const reportModel = require('../schema/report.schema');

const reportService = {
    registerReport: (data) => {
        return reportModel.create(data);
    },

    getAllReports: () => {
        return reportModel.find();
    },

    getReportByDate: (date) => {
        return reportModel.findOne(date);
    },

    deleteReport: (date) => {
        return reportModel.deleteOne(date);
    },
    updateReport: (date, update) => {
        return reportModel.updateOne(date, update, { new: true });
    }
}

module.exports = reportService;