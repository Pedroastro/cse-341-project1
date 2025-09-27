const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Users Api',
    description: 'Users Api',
  },
  host: 'cse-341-project1-63iy.onrender.com',
  schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
