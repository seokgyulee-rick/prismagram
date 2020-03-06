import dotevnv from "dotenv";
import path from "path";
dotevnv.config({ path: path.resolve(__dirname, ".env") });
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";

console.log(process.env.PORT);
const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({ schema });
server.express.use(logger("dev"));

console.log("check");
server.start({ port: PORT }, () =>
  console.log(`The Server is running on http://localhost:${PORT}`)
);
