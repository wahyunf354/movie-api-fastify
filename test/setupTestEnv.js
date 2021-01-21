const fastify = require("fastify");
const app = require("../app");
const fp = require("fastify-plugin");

module.exports = function setupTestEnv() {
  // init server
  const server = fastify({
    logger: "silent",
    pluginTimeout: 2 * 60 * 1000,
  });

  // setup lifecycle test
  beforeAll(async () => {
    server.register(fp(app));
    await server.ready();
  });

  afterAll(async () => {
    await server.close();
  });

  return server;
};
