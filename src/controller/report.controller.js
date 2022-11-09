const reportService = require('../service/report.service');

const express = require('express');
const controller = express.Router();

// The comments bellow are used to generate the swagger informations

controller.post('/registerReport', (req, res) => {
    // #swagger.tags = ['Report']
    // #swagger.summary = 'Register a new report in the database.'
    // #swagger.description = 'This route is responsable for create a new report register in the database with the informations passed in the body of the requisition.'
    /* #swagger.parameters['report data'] = {
        in: 'body',
        description: 'Report data.',
        required: true,
        schema: { $ref: "#/definitions/report"}
    }*/
    res.send(reportService.registerReport(req.body).catch(err => {
        console.log('An error ocourred, sorry!', err);
    }));
});

controller.get('/getAllReports', async (req, res) => {
    // #swagger.tags = ['Report']    
    // #swagger.summary = 'Returns all reports.'
    // #swagger.description = 'Returns all the reports registered in the database.'
    res.send(await reportService.getAllReports().catch(err => {
        console.log('An error ocourred, sorry!', err);
    }));
});

controller.get('/getReportsByDate', async (req, res) => {
    // #swagger.tags = ['Report']
    // #swagger.summary = 'Get a report by date'
    // #swagger.description = 'Get a report by date. If has more than one report with the same date, then only the first one will be returned.'
    // #swagger.parameters['date'] = { description: 'Date that report was created.', required: true}
    res.send(await reportService.getReportByDate(req.query).catch(err => {
        console.log('An error ocourred, sorry!', err);
    }));
});
controller.delete('/deleteReport', async (req, res) => {
    // #swagger.tags = ['Report']
    // #swagger.summary = 'Delete a report by date'
    // #swagger.description = 'Delete a report searching by the date of creation.'
    // #swagger.parameters['date'] = { description: 'Date that report was created.', required: true}
    res.send(await reportService.deleteReport(req.query).catch(err => {
        console.log('An error ocourred, sorry!', err);
    }));
});

controller.put('/updateReport', async (req, res) => {
    // #swagger.tags = ['Report']
    // #swagger.summary = 'Update any report information in the database.'
    // #swagger.description = 'Update any report information in the database searching the especific report by date.'
    // #swagger.parameters['date'] = { description: 'Date that report was created.' }
    /* #swagger.parameters['updated data'] = {
        in: 'body',
        description: 'Senha atualizada',
        required: true,
        schema: { $ref: "#/definitions/report"}
    }*/
    res.send(await reportService.updateReport(req.query, req.body).catch(err => {
        console.log('An error ocourred, sorry!', err);
    }));
});

module.exports = controller;