const generalPasswordService = require('../service/generalPassword.service');

const express = require('express');
const controller = express.Router();

// The comments bellow are used to generate the swagger informations

controller.post('/registerGeneralPassword', async (req, res) => {
    // #swagger.tags = ['General']
    // #swagger.summary = 'Register a new password in the database.'
    // #swagger.description = 'This route is responsable for create a new general passwors register in the database with the informations passed in the body of the requisition.'
    res.send(await generalPasswordService.registerGeneralPassword(req.body).catch(err => {
        console.log('An error ocourred, sorry!', err);
    }));
});

controller.get('/getAllGeneralPassword', async (req, res) => {
    // #swagger.tags = ['General']    
    // #swagger.summary = 'Returns all passwords.'
    // #swagger.description = 'Returns all the general password registered in the database.'
    res.send(await generalPasswordService.getAllGeneralPasswords().catch(err => {
        console.log('An error ocourred, sorry!', err);
    }));
});

controller.get('/getGeneralPasswordByDate', async (req, res) => {
    // #swagger.tags = ['General']
    // #swagger.summary = 'Get a general password by date'
    // #swagger.description = 'Get a general password by date. If has more than one general password with the same date, then only the first one will be returned.'
    // #swagger.parameters['date'] = { description: 'Date that general password was created.', required: true}
    res.send(await generalPasswordService.getGeneralPasswordByDate(req.query).catch(err => {
        console.log('An error ocourred, sorry!', err);
    }));
});
controller.delete('/deleteGeneralPassword', async (req, res) => {
    // #swagger.tags = ['General']
    // #swagger.summary = 'Delete a general password by date'
    // #swagger.description = 'Delete a general password searching by the date of creation.'
    // #swagger.parameters['date'] = { description: 'Date that general password was created.', required: true}
    res.send(await generalPasswordService.deleteGeneralPassword(req.query).catch(err => {
        console.log('An error ocourred, sorry!', err);
    }));
});

controller.put('/updateGeneralPassword', async (req, res) => {
    // #swagger.tags = ['General']
    // #swagger.summary = 'Update any general password information in the database.'
    // #swagger.description = 'Update any general information in the database searching the especific report by date.'
    // #swagger.parameters['date'] = { description: 'Date that exans information was created.' }
    /* #swagger.parameters['updated data'] = {
        in: 'body',
        description: 'Data to update',
        required: true,
        schema: { $ref: "#/definitions/generalPassword"}
    }*/
    res.send(await generalPasswordService.updateGeneralPassword(req.query, req.body).catch(err => {
        console.log('An error ocourred, sorry!', err);
    }));
});

module.exports = controller;