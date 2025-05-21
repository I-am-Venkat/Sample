import User from '../model/user.model.js' // Assuming you have a User model defined in user.model.js
const validateUser=async (req, res) => {
    const { mobilenumber, password } = req.body;
  
    try {
        const user = await User.findOne({ mobilenumber });

      if (!user || user.password !== password) {
        return res.status(401).json({ success: false, message: 'Invalid mobile number or password' });
      }
  
      res.status(200).json({ success: true, message: 'Login successful' });
  
    } catch (error) {
      res.status(500).json({ success: false, message: 'Server error' });
    }
  };
export default validateUser;