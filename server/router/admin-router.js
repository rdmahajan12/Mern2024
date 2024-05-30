const express = require("express");
const adminController = require("../controller/admin-controller");
const authMiddleware = require("../middleware/auth-middleware");
const adminMiddleware = require("../middleware/admin-middleware");
const router = express.Router();

router
  .route("/users")
  .get(authMiddleware, adminMiddleware, adminController.getAllUsers);
router
  .route("/users/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.userDeleteById);
router
  .route("/users/:id")
  .get(authMiddleware, adminMiddleware, adminController.getUserById);
router
  .route("/users/update/:id")
  .patch(authMiddleware, adminMiddleware, adminController.userUpdateById);
router
  .route("/contacts")
  .get(authMiddleware, adminMiddleware, adminController.getAllContacts);

module.exports = router;
