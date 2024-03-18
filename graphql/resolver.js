const BookModel = require("../models/book.model");
const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");

const resolvers = {
  Query: {
    getBook: async (_, { id }) => {
      return await BookModel.findById(id);
    },
    getAllBooks: async () => {
      return await BookModel.find();
    },
    getUser: async (_, __, req) => {
      return await UserModel.findById(req.user._id);
    },
    getAllUsers: async () => {
      return await UserModel.find();
    },
  },

  Mutation: {
    loginUser: async (_, { email, password }) => {
      const user = await UserModel.findOne({ email });
      if (!user) {
        throw new Error("User not found");
      }

      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error("Invalid password");
      }

      const token = signToken(user);

      return { token, user };
    },
    registerUser: async (_, { username, email, password }) => {
      try {
        const existingUser = await UserModel.findOne({ email });

        if (existingUser) {
          throw new Error("Email already there!!");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({
          username,
          email,
          password: hashedPassword,
        });
        await newUser.save();
        const token = signToken(newUser);
        return { token, user: newUser };
      } catch (err) {
        throw new Error(err.message);
      }
    },
    updateUser: async (_, { username }, req) => {
      try {
        const updateUser = await UserModel.findByIdAndUpdate(
          req.user._id,
          { username },
          { new: true }
        );
        await updateUser.save();
        return { user: updateUser };
      } catch (error) {
        console.error(error);
        throw new Error(error.message);
      }
    },
    deleteUser: async (_, __, req) => {
      try {
        const deleteUser = await UserModel.findByIdAndDelete(req.user._id);
        return { user: deleteUser };
      } catch (error) {
        console.error(error);
        throw new Error(error.message);
      }
    },
    addBook: async (_, { title, author, genre, ISBN }, req) => {
      try {
        console.log(req.user, title);
        const books = await BookModel.findOne({ title });
        if (!books && req.user.email == "ideaback@gmail.com") {
          const book = new BookModel({ title, author, genre, ISBN });
          await book.save();
          return book;
        } else {
          throw new Error("Not Authorised");
        }
      } catch (error) {
        throw new Error(error.message);
      }
    },
    updateBook: async (_, { ...args }, req) => {
      try {
        const books = await BookModel.findById(args.id);
        if (books && req.user.email == "ideaback@gmail.com") {
          const book = await BookModel.findByIdAndUpdate(
            args.id,
            { ...args },
            { new: true }
          );
          await book.save();
          return book;
        } else {
          throw new Error("User is not Authorised");
        }
      } catch (error) {
        throw new Error(error.message);
      }
    },
    deleteBook: async (_, { id }, req) => {
      try {
        const books = await BookModel.findById(id);
        if (books && req.user.email == "ideaback@gmail.com") {
          const book = await BookModel.findByIdAndDelete(id);
          return book
        } else {
          throw new Error("User is not Authorised");
        }
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
};

module.exports = resolvers;
