const express = require("express");
const {
  getListStyleUser,
  checkAdmin,
  getAllUser,
  editUser,
  deleteUser,
  searchUser,
} = require("../controllers/managerUserController");
const { verifyToken } = require("../middlewares/auth/verifyToken");
const router = express.Router();

router.get("/admin", verifyToken, checkAdmin, (req, res, next) => {
  return res.json({
    success: true,
    message: "Hello admin!",
  });
});
router.get("/getListStyle", getListStyleUser);
router.get("/getAllUser", verifyToken, getAllUser);
router.put("/updateUser", verifyToken, checkAdmin, editUser);
router.delete("/deleteUser/:id", verifyToken, checkAdmin, deleteUser);
router.get("/search", searchUser);

module.exports = router;
