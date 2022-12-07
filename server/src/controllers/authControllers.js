const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });

    // Check user exist
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User doesn't exist",
      });
    }

    // Verify password
    const verifyPassword = bcrypt.compareSync(password, user.password);
    if (!verifyPassword) {
      return res.status(400).json({
        success: false,
        message: "Incorrect Password",
      });
    }

    // Create token
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.ACCESS_TOKEN_SECRET
    );

    // Pass all
    return res.status(200).json({
      success: true,
      message: "User login successfully",
      content: {
        token,
        idUser: user._id,
        username,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const registerUser = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });

    // Check user exist
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exist",
      });
    }

    // Hash password
    var salt = bcrypt.genSaltSync(10);
    var hashPassword = bcrypt.hashSync(password, salt);

    // Create User
    const newUser = new User({
      username,
      password: hashPassword,
      role: "CUSTOMER",
    });

    await newUser.save();

    // Pass all
    return res.status(200).json({
      success: true,
      message: "User register successfully",
      content: {
        username,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const checkLogin = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user)
      return res.status(400).json({
        success: false,
        message: "User not found",
      });

    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = { loginUser, registerUser, checkLogin };
