const express = require("express");
const {
  loginUser,
  registerUser,
  checkLogin,
} = require("../controllers/authControllers");
const { verifyToken } = require("../middlewares/auth/verifyToken");
const router = express.Router();

router.get("/", verifyToken, checkLogin);
router.post("/login", loginUser);
router.post("/register", registerUser);

module.exports = router;
