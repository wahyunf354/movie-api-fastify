const fp = require("fastify-plugin");

module.exports = fp(async function (fastify, opts) {
  fastify.decorate("db", function () {
    return "db";
  });
});
