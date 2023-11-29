const router = require("express").Router();
const userDataModel = require("../model/userModel");

const validateSignupData = (req, res, next) => {
  const { userName, email, userPassword } = req.body;

  if (!userName || !email || !userPassword) {
    return res.status(400).json({ error: "provide all field" });
  }

  next();
};

router.post("/signup", validateSignupData, async (req, res) => {
  const { userName, email, userPassword } = req.body;

  try {
    const existingUser = await userDataModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const user_data = new userDataModel({
      userName,
      email,
      userPassword,
    });

    await user_data.save();
    res.status(201).json({ message: "user Register SuccessFully" });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const validateSignInData = (req, res, next) => {
  const { userName, userPassword } = req.body;

  if (!userName || !userPassword) {
    return res
      .status(400)
      .json({ error: "Please provide both username and userPassword" });
  }

  next();
};

router.post("/signin",validateSignInData, async (req, res) => {
  const { userName, userPassword } = req.body;

  try {
    const userSignInData = await userDataModel.findOne({
      userName,
      userPassword,
    });

    if (!userSignInData) {
      return res.status(401).json({ error: "Invalid username or userPassword" });
    }

    res.status(200).json({ userSignInData });
  } catch (error) {
    console.error("Error during signin:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
