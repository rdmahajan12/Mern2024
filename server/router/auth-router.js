const express = require("express");
const router = express.Router();
const controller = require("../controller/auth-controller");
const signupSchema = require("../validators/auth_validator");
const validate = require("../middleware/validate-middleware");

router.route("/").get(controller.home);
router.route("/register").post(validate(signupSchema), controller.register);
router.route("/login").post(controller.login);

module.exports = router;
