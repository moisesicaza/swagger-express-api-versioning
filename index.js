const SwaggerExpress = require('swagger-express-mw');
const index = require('express')();
const SwaggerUi = require('swagger-tools/middleware/swagger-ui');

module.exports = index;
const config = {
  appRoot: __dirname,
};
SwaggerExpress.create(config, function (err, swaggerExpress) {
  if (err) { throw err; }
  // install middleware
  swaggerExpress.register(index);
  index.use(SwaggerUi(swaggerExpress.runner.swagger));
  const port = process.env.PORT || 10011;
  index.listen(port);
});
