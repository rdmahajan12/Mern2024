const Contact = require("../models/contact-model");

const contactForm = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    return res.status(200).json({ msg: "form filling done" });
  } catch (error) {
    return res.status(400).json({ msg: "form filling not done" });
  }
};

module.exports = contactForm;
