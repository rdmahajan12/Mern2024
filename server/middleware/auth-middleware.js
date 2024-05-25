const jwt = require("jsonwebtoken");
const User = require("../models/user_model");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  const jwtToken = token.replace("Bearer", "").trim();
  try {
    const isVerify = jwt.verify(jwtToken, process.env.JWT_TOKEN_KEY);
    const userData = await User.findOne({ email: isVerify.email }).select({
      password: 0,
    });
    req.user = userData;
    req.token = token;
    req.userId = userData._id;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized token" });
  }
};

module.exports = authMiddleware;
