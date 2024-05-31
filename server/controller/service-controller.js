const Service = require("../models/service-model");

const services = async (req, res) => {
  try {
    const response = await Service.find();
    if (!response) {
      return res.status(400).json({ msg: "Service not found" });
    }
    return res.status(200).json({ msg: response });
  } catch (error) {
    return res.status(500).json({ msg: "Server error" });
  }
};

module.exports = services;
