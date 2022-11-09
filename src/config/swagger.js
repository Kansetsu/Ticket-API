const swaggerAutogen = require("swagger-autogen")();
const outputFile = "./doc/swagger_output.json";
const controllerFile = [
    './src/controller/report.controller.js', './src/controller/examsPassword.controller.js', './src/controller/generalPassword.controller.js', './src/controller/priorityPassword.controller.js'
];

// Responsable to generate the swagger documentation in the swagger_output.json file.
const doc = {
    info: {
        version: "2.0.0",
        title: "Ticket API",
        description: "API that provides a report based on the number of passwords that were created and the number of people attended.",
        contact: {
            email: "vinicius802010@gmail.com",
        },
    },
    host: "localhost:8000",
    basePath: "/ticket",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
    definitions: {
        report: {
            // reportDate: "2022/10/09",
            numberOfGeneratedPasswords: 10,
            numberOfAttendedPasswords: 7,
            generatedPriorityPasswords: 3,
            generatedGeneralPasswords: 5,
            generatedExamsPasswords: 2
        },
        examsPassword: {
            numberOfPassword: 1,
            ticketWindow: '5',
            dateOfAttendant: '09/11/2022',
            typeOfPassword: 'SE',
        },
        generalPassword: {
            numberOfPassword: 1,
            ticketWindow: '5',
            dateOfAttendant: '09/11/2022',
            typeOfPassword: 'SG',
        },
        priorityPassword: {
            numberOfPassword: 1,
            ticketWindow: '5',
            dateOfAttendant: '09/11/2022',
            typeOfPassword: 'SP',
        },
    },
};

// Generate a new swagger_output.json file when the project is started and execute the index.js file.
swaggerAutogen(outputFile, controllerFile, doc).then(() => {
    require("../index.js");
});