const express = require("express");
const router = express.Router();
const controller = require("../controller/auth-controller");

router.route("/").get(controller.home);
router.route("/register").post(controller.register);
router.route("/login").post(controller.login);

module.exports = router;
