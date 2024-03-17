const mongoose = require('mongoose');
// require("dotenv").config();

// const connection = mongoose.connect(process.env.mongoURL);
const connection = mongoose.connect("mongodb+srv://neha:singh@cluster0.nznbcxe.mongodb.net/bookManagement?retryWrites=true&w=majority&appName=Cluster0")

module.exports = { connection };   