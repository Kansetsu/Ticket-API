const examsPasswordService = require('../service/examsPassword.service');

const express = require('express');
const controller = express.Router();

// The comments bellow are used to generate the swagger informations

controller.post('/registerExamsPassword', async (req, res) => {
    // #swagger.tags = ['Exams']
    // #swagger.summary = 'Register a new password in the database.'
    // #swagger.description = 'This route is responsable for create a new exams passwors register in the database with the informations passed in the body of the requisition.'
    res.send(await examsPasswordService.registerExamsPassword(req.body).catch(err => {
        console.log('An error ocourred, sorry!', err);
    }));
});

controller.get('/getAllExamsPassword', async (req, res) => {
    // #swagger.tags = ['Exams']    
    // #swagger.summary = 'Returns all passwords.'
    // #swagger.description = 'Returns all the exams password registered in the database.'
    res.send(await examsPasswordService.getAllExamsPasswords().catch(err => {
        console.log('An error ocourred, sorry!', err);
    }));
});

controller.get('/getExamsPasswordByDate', async (req, res) => {
    // #swagger.tags = ['Exams']
    // #swagger.summary = 'Get a exams password by date'
    // #swagger.description = 'Get a exams password by date. If has more than one exams password with the same date, then only the first one will be returned.'
    // #swagger.parameters['date'] = { description: 'Date that exams password was created.', required: true}
    res.send(await examsPasswordService.getExamsPasswordByDate(req.query).catch(err => {
        console.log('An error ocourred, sorry!', err);
    }));
});
controller.delete('/deleteExamsPassword', async (req, res) => {
    // #swagger.tags = ['Exams']
    // #swagger.summary = 'Delete a exams password by date'
    // #swagger.description = 'Delete a exams password searching by the date of creation.'
    // #swagger.parameters['date'] = { description: 'Date that exams password was created.', required: true}
    res.send(await examsPasswordService.deleteExamsPassword(req.query).catch(err => {
        console.log('An error ocourred, sorry!', err);
    }));
});

controller.put('/updateExamsPassword', async (req, res) => {
    // #swagger.tags = ['Exams']
    // #swagger.summary = 'Update any exams password information in the database.'
    // #swagger.description = 'Update any exams information in the database searching the especific report by date.'
    // #swagger.parameters['date'] = { description: 'Date that exans information was created.' }
    /* #swagger.parameters['updated data'] = {
        in: 'body',
        description: 'Data to update',
        required: true,
        schema: { $ref: "#/definitions/examsPassword"}
    }*/
    res.send(await examsPasswordService.updateExamsPassword(req.query, req.body).catch(err => {
        console.log('An error ocourred, sorry!', err);
    }));
});

module.exports = controller;