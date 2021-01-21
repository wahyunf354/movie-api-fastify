const fastify = require("fastify");
const Autoload = require("fastify-autoload");
const path = require("path");

function build() {
  const app = fastify({
    logger: true,
  });

  app.register(Autoload, {
    dir: path.join(__dirname, "routes"),
  });

  app.register(Autoload, {
    dir: path.join(__dirname, "plugins"),
  });

  return app;
}

build().listen(3000);
module.exports = build;
