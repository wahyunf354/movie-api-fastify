const setupTestEnv = require("../setupTestEnv");
const fastify = setupTestEnv();

test("should body object in post with compelate properties", async () => {
  const requestPayload = {
    title: "Calon Bini",
    year: 2019,
    duration: "1h 35m",
    category: "comedy",
    director: "Asep Kusdinar",
    plot: "Didorong ambisi dan keserakahannya",
    actors: "Junko Takeuchi, Maile Flanagan, Kate Higgins, Chie Nakamura",
    image: "https://placeimg.com/640/480/any",
  };

  const serverResponse = await fastify.inject({
    method: "POST",
    url: "/",
    payload: requestPayload,
  });

  expect(serverResponse.statusCode).toEqual(200);
  expect(serverResponse.json().message).toEqual("Success add data movie");
  expect(serverResponse.json().data.title).toEqual(requestPayload.title);
  expect(serverResponse.json().data.year).toEqual(requestPayload.year);
  expect(serverResponse.json().data.category).toEqual(requestPayload.category);
  expect(serverResponse.json().data.image).toEqual(requestPayload.image);
  expect(serverResponse.json().data.plot).toEqual(requestPayload.plot);
  expect(serverResponse.json().data.actors).toEqual(requestPayload.actors);
});
