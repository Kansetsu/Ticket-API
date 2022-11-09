const priorityPasswordService = require('../service/priorityPassword.service');

const express = require('express');
const controller = express.Router();

// The comments bellow are used to generate the swagger informations

controller.post('/registerPriorityPassword', async (req, res) => {
    // #swagger.tags = ['Priority']
    // #swagger.summary = 'Register a new password in the database.'
    // #swagger.description = 'This route is responsable for create a new priority passwors register in the database with the informations passed in the body of the requisition.'
    res.send(await priorityPasswordService.registerPriorityPassword(req.body).catch(err => {
        console.log('An error ocourred, sorry!', err);
    }));
});

controller.get('/getAllPriorityPassword', async (req, res) => {
    // #swagger.tags = ['Priority']    
    // #swagger.summary = 'Returns all passwords.'
    // #swagger.description = 'Returns all the priority password registered in the database.'
    res.send(await priorityPasswordService.getAllPriorityPasswords().catch(err => {
        console.log('An error ocourred, sorry!', err);
    }));
});

controller.get('/getPriorityPasswordByDate', async (req, res) => {
    // #swagger.tags = ['Priority']
    // #swagger.summary = 'Get a priority password by date'
    // #swagger.description = 'Get a priority password by date. If has more than one Priority password with the same date, then only the first one will be returned.'
    // #swagger.parameters['date'] = { description: 'Date that priority password was created.', required: true}
    res.send(await priorityPasswordService.getPriorityPasswordByDate(req.query).catch(err => {
        console.log('An error ocourred, sorry!', err);
    }));
});
controller.delete('/deletePriorityPassword', async (req, res) => {
    // #swagger.tags = ['Priority']
    // #swagger.summary = 'Delete a priority password by date'
    // #swagger.description = 'Delete a priority password searching by the date of creation.'
    // #swagger.parameters['date'] = { description: 'Date that priority password was created.', required: true}
    res.send(await priorityPasswordService.deletePriorityPassword(req.query).catch(err => {
        console.log('An error ocourred, sorry!', err);
    }));
});

controller.put('/updatePriorityPassword', async (req, res) => {
    // #swagger.tags = ['Priority']
    // #swagger.summary = 'Update any priority password information in the database.'
    // #swagger.description = 'Update any priority information in the database searching the especific report by date.'
    // #swagger.parameters['date'] = { description: 'Date that exans information was created.' }
    /* #swagger.parameters['updated data'] = {
        in: 'body',
        description: 'Data to update',
        required: true,
        schema: { $ref: "#/definitions/priorityPassword"}
    }*/
    res.send(await priorityPasswordService.updatePriorityPassword(req.query, req.body).catch(err => {
        console.log('An error ocourred, sorry!', err);
    }));
});

module.exports = controller;