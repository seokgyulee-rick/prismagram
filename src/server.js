console.log("hello");
require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";

const PORT = process.env.PORT || 4000;

const typeDefs = `
    type Query{
        hello:String!
    }
`;
const resolvers = {
  Query: {
    hello: () => "Hi"
  }
};
const server = new GraphQLServer({ typeDefs, resolvers });

console.log("check");
server.start({ port: PORT }, () =>
  console.log(`The Server is running on http://localhost:${PORT}`)
);
