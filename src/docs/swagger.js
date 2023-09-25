const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger.json';
const endpointsFiles = ['../routes.ts'];

const config = {
    info: {
        title: 'Challenge API Documentation',
        description: '',
    },
    tags: [ ],
    host: 'localhost:8080',
    schemes: ['http', 'https'],
};

swaggerAutogen(outputFile, endpointsFiles, config);