const { gql } = require("apollo-server-express");

const typeDefs= gql`
type Book {
    id: ID!
    title: String!
    author: String!
    genre: String!
    status:String!
    ownedBy:ID!
  }
   
  type User {
    id: ID!
    username: String!
    password:String!
    email: String!
    books:[UserBooks!]!
  }
  type UserBooks{
    book:ID!
    status:String!,
    ownId:ID!
  }
  type UserRequest{
    book:ID!,
    id:ID!
  }
  
  type Query {
    getBook(id: ID!): Book
    getAllBooks: [Book!]!
    getUser: User
    getAllUsers: [User!]!
  }
  type AuthResponse {
    token: String
    user: User
  }
  type Mutation {
    loginUser(email: String!, password: String!): AuthResponse
    registerUser(username: String!, email: String!,password: String!): AuthResponse
    updateUser(username:String!):User!
    deleteUser:User!
    addBook(title: String!, author: String!, genre: String!): Book
    updateBook(id:ID!,title:String, author: String, genre: String):Book
    deleteBook(id:ID!):Book
  } 
`
module.exports = typeDefs 