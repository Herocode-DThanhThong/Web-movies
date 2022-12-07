const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getListStyleUser = async (req, res, next) => {
  const arr = [
    {
      id: "ADMIN",
      name: "ADMIN",
    },
    {
      id: "CUSTOMER",
      name: "CUSTOMER",
    },
  ];
  return res.status(200).json({
    success: true,
    content: arr,
  });
};

const checkAdmin = async (req, res, next) => {
  const userId = req.userId;
  if (!userId)
    return res.status(404).json({
      success: false,
      message: "User does not exist",
    });

  try {
    const user = await User.findById(userId).select("-password");
    if (user.role === "ADMIN") return next();
    else
      return res.status(404).json({
        success: false,
        message: "You are not admin!",
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

const getAllUser = async (req, res, next) => {
  const userId = req.userId;
  if (!userId)
    return res.status(404).json({
      success: false,
      message: "User does not exist",
    });

  try {
    const user = await User.findById(userId).select("-password");
    if (user.role === "ADMIN") {
      const users = await User.find({}).select("-password");
      return res.status(200).json({
        success: true,
        users,
      });
    } else
      return res.status(404).json({
        success: false,
        message: "You aren't authorized ",
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

const editUser = async (req, res, next) => {
  const { id, username, role } = req.body;

  if (!username || !role)
    return res.status(400).json({
      success: false,
      message: "Username, role is required!",
    });

  const user = await User.findOne({ username }).select("-password");
  if (user)
    return res
      .status(400)
      .json({ success: false, message: "Username has already existed!" });
  try {
    const data = {
      username,
      role,
    };

    const userUpdate = await User.findByIdAndUpdate({ _id: id }, data, {
      new: true,
    });

    return res.status(200).json({
      success: true,
      userUpdate,
      message: "Update user successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

const deleteUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    const userDelete = await User.findOneAndDelete({ _id: id }).select(
      "-password"
    );

    return res.status(200).json({
      success: true,
      userDelete,
      message: "Delete user successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

const searchUser = async (req, res, next) => {
  const { username } = req.query;
  if (!username) {
    let data = await User.find({});

    return res.status(200).json({
      success: true,
      users: data,
    });
  }

  let data = await User.find({
    $or: [{ username: { $regex: username } }],
  });
  return res.status(200).json({
    success: true,
    users: data,
  });
};

module.exports = {
  getListStyleUser,
  checkAdmin,
  getAllUser,
  editUser,
  deleteUser,
  searchUser,
};
