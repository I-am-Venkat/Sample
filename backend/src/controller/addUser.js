import User from '../model/user.model.js';

const addUser = async (req, res) => {
  try {
    const { name, mobilenumber, password } = req.body;

    // Basic validation
    if (!name || !mobilenumber || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check for duplicate mobile number
    const existingUser = await User.findOne({ mobilenumber });
    if (existingUser) {
      return res.status(409).json({ error: "Mobile number already registered" });
    }

    // Save new user
    const newUser = new User({ name, mobilenumber, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};

export default addUser;
