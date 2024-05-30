const Contact = require("../models/contact-model");
const User = require("../models/user_model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select({ password: 0 });
    if (!users || users.length === 0) {
      return res.status(400).json({ message: "Users not found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (!contacts || contacts.length === 0) {
      return res.status(400).json({ message: "Contacts not found" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

const userDeleteById = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    await Contact.deleteOne({ _id: id });
    res.status(200).json({ message: "User Delete Successfully" });
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }).select({
      password: 0,
    });
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const userUpdateById = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    console.log({ updateData });
    const updatedData = await User.updateOne({ _id: id }, { $set: updateData });
    console.log({ updatedData });
    return res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
  getAllContacts,
  userDeleteById,
  getUserById,
  userUpdateById,
};
