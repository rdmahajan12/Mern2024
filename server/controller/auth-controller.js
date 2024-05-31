const User = require("../models/user_model");

const home = async (req, res) => {
  try {
    return res.status(200).json({ message: req.body });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const register = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "Email already exist" });
    }

    const userCreated = await User.create({
      username,
      email,
      password,
      phone,
    });

    return res.status(200).json({
      message: "Registration successfully done",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    return res.status(500).json("Internal server error");
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ message: "User not found" });
    }

    const user = await userExist.comparePassword(password);
    if (user) {
      return res.status(200).json({
        message: "Login successfully done",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      return res.status(401).json("email and password not found");
    }
  } catch (error) {
    return res.status(500).json("Internal server error");
  }
};

const user = async (req, res) => {
  try {
    const userData = req.user;
    return res.status(200).json({ userData });
  } catch (error) {
    return res.status(400).json({ message: "User not found" });
  }
};

module.exports = { home, register, login, user };
