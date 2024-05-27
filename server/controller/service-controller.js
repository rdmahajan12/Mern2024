const Service = require("../models/service-model");

const services = async (req, res) => {
  try {
    const response = await Service.find();
    console.log({ response });
    if (!response) {
      res.status(400).json({ msg: "Service not found" });
    }
    res.status(200).json({ msg: response });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = services;
