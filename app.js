import fastify from "fastify";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import Autoload from "fastify-autoload";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function build() {
  const app = fastify({
    logger: true,
  });

  app.register(Autoload, {
    dir: join(__dirname, "routes"),
  });

  app.register(Autoload, {
    dir: join(__dirname, "plugins"),
  });

  return app;
}

build().listen(3000);
export default build;
