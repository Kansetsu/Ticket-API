require("dotenv").config();

const port = 8000;
const mongoConnection = require('./config/db');
const cors = require('cors');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../doc/swagger_output.json');
const app = express();
const reportController = require('./controller/report.controller');
const ExamsPasswordController = require('./controller/examsPassword.controller');
const GeneralPasswordController = require('./controller/GeneralPassword.controller');
const PriorityPasswordController = require('./controller/PriorityPassword.controller');


mongoConnection();
app.use(cors());
app.use(express.json());
app.use('/ticket/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use('/ticket', reportController);
app.use('/ticket', ExamsPasswordController);
app.use('/ticket', GeneralPasswordController);
app.use('/ticket', PriorityPasswordController);
app.listen(port, () => {
    console.log(`listening on port , ${port}\nThe documentation is running on http://localhost:${port}/ticket/doc`);
});