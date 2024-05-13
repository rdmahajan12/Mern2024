const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to Mern Stack projects");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home };
