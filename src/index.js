import { GraphQLServer, PubSub } from "graphql-yoga";
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import prisma from "../prisma";

const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: {
    Query,
    Mutation,
    // Group,
    // Org,
    // Site,
  },
  context: {
    prisma,
    pubsub,
  },
});

server.start(() => {
  console.log("The server is up!");
});
