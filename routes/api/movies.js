module.exports = async function (fastify, opts) {
  fastify.route({
    method: "GET",
    url: "/",
  });
};
