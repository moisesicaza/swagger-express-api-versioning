import express from "express";
import ApiVersioning from "./versioning/ApiVersioning";

const app = express();
const host = 'localhost';
const port = process.env.PORT || 10010;

// API versioning instance
const versioning = new ApiVersioning(__dirname);
// Generate Swagger files for each API version
const swaggerFile1 = ApiVersioning.generateSwaggerFile(host, port, './api/swagger/v1/swagger.yaml');
const swaggerFile2 = ApiVersioning.generateSwaggerFile(host, port, './api/swagger/v2/swagger.yaml');
// Make applications
versioning.createAppVersion(app, swaggerFile1, '/api/v1', {
  swaggerUi: '/docs',
  apiDocs: '/swagger',
});
versioning.createAppVersion(app, swaggerFile2, '/api/v2', {
  swaggerUi: '/docs',
  apiDocs: '/swagger',
});

app.listen(port);

module.exports = app;
