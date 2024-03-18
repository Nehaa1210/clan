const express = require("express");
const { connection } = require("./db");
const { ApolloServer } = require('apollo-server-express');
 const typeDefs = require('./graphql/');
 const resolvers = require('./schema/resolvers.js');


const app = express()

const server = new ApolloServer({
     typeDefs,
     resolvers,
     context: auth,
   });

app.use(express.json());



const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  
    app.listen(4500, async() => {
      try{
        await connection;
        console.log('database connected');
      }catch(err){
        console.log(err);
      }
      console.log(`Server running!`);
      
    })
  
};
  
startApolloServer();
  


