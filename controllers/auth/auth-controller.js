const bcrypt = require("bcryptjs");
const jwr = require("jsonwebtoken");
const User = require("../../models/User");

//register
const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;

  try {

    const checkUser = await User.findOne({email})
    if(checkUser) return res.json({success: false, message: "User Aleready exists with the same email! Please try again"})

    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      userName,
      email,
      password: hashPassword,
    });

    await newUser.save();
    res.status(200).json({ success: true, message: "Registration successful" });
  } catch (error) {
    console.log(error),
      res.status(500).json({
        success: false,
        message: "Some error occured",
      });
  }
};

//login

const login = async (req, res) => {
  try {
  } catch (error) {
    console.log(error),
      res.status(500).json({
        success: false,
        message: "Some error occured",
      });
  }
};

//log out

//auth middleware

module.exports = { registerUser };
