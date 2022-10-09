require("dotenv").config();

const port = 8000;
const mongoConnection = require('./config/db');
const cors = require('cors');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../doc/swagger_output.json');
const app = express();
const reportController = require('./controller/report.controller');

mongoConnection();
app.use(cors());
app.use(express.json());
app.use('/ticket/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use('/ticket', reportController);
app.listen(port, () => {
    console.log(`listening on port , ${port}\nThe documentation is running on http://localhost:${port}/ticket/doc`);
});