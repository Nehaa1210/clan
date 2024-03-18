<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body>

<h1>Book Management System</h1>

<p>This project aims to develop a robust Node.js application with a GraphQL API for managing books and users. It includes features such as authentication using JWT tokens, CRUD operations for books and users, and a new functionality for book management.</p>

<p>The application is designed to provide a seamless experience for administrators to add, update, and delete books.</p>

<p>With a focus on scalability, performance, and security, this project leverages modern technologies such as Node.js, MongoDB, GraphQL, and JWT for authentication.</p>


<h3>Prerequisites</h3>

<ul>
  <li>Node.js installed on your machine</li>
  <li>MongoDB installed and running locally or an accessible MongoDB instance</li>
  <li>Postman for testing the API endpoints (optional)</li>
</ul>

<h3>Installation</h3>


<ol start="3">
  <li>Install dependencies:</li>
</ol>

<pre><code>npm install
</code></pre>


<h3>Running the Application</h3>

<p>To start the application, run the following command:</p>

<pre><code>npm start
</code></pre>

<h2 id="api-documentation">API Documentation</h2>

<h3>GraphQL Schema</h3>

<p>The GraphQL schema includes types for books, users, and authentication responses. Below are the main types and operations:</p>

<h4>Types</h4>

<ul>
  <li><code>Book</code>: Represents a book entity with fields such as <code>id</code>, <code>title</code>, <code>author</code>, <code>genre</code>, <code>status</code>, and <code>ownedBy</code>.</li>
  <li><code>User</code>: Represents a user entity with fields such as <code>id</code>, <code>username</code>, <code>password</code>, <code>email</code>, and <code>books</code>.</li>
  <li><code>UserBooks</code>: Represents the books owned by a user with fields such as <code>book</code>, <code>status</code>, and <code>ownId</code>.</li>
  <li><code>UserRequest</code>: Represents a book request made by a user with fields such as <code>book</code> and <code>id</code>.</li>
  <li><code>AuthResponse</code>: Represents the response after authentication with fields <code>token</code> and <code>user</code>.</li>
</ul>

<h4>Queries</h4>

<ul>
  <li><code>getBook(id: ID!)</code>: Retrieve a book by its ID.</li>
  <li><code>getAllBooks</code>: Retrieve all books.</li>
  <li><code>getUser</code>: Retrieve the currently authenticated user.</li>
  <li><code>getAllUsers</code>: Retrieve all users.</li>
</ul>

<h4>Mutations</h4>

<ul>
  <li><code>loginUser(email: String!, password: String!)</code>: Login user and generate JWT token.</li>
  <li><code>registerUser(username: String!, email: String!, password: String!)</code>: Register a new user and generate JWT token.</li>
  <li><code>updateUser(username: String!)</code>: Update the username of the currently authenticated user.</li>
  <li><code>deleteUser</code>: Delete the currently authenticated user.</li>
  <li><code>addBook(title: String!, author: String!, genre: String!)</code>: Add a new book (admin only).</li>
  <li><code>updateBook(id: ID!, title: String, author: String, genre: String)</code>: Update book details (admin only).</li>
  <li><code>deleteBook(id: ID!)</code>: Delete a book (admin only).</li>
</ul>

***********************************************************
</body>
</html>
