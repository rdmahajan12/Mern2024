const express = require("express");
const router = express.Router();
const { home } = require("../controller/auth-controller");

router.route("/").post(home);

module.exports = router;
