const User = require('../models/user.model').User;

const registerUser = async (req, res) => {
  try {
    console.log('User Details:', req.body);

    const existingUser = await User.findOne({ email: req.body.email });
    
    if (existingUser) {
      return res.status(400).send('Email is already registered');
    }

    let userData = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });

    await userData.save();
    
    res.send('User registered!!!');
  } catch (err) {
    console.log(err);
    res.status(500).send('Something went wrong');
  }
};

const getUser = async (req, res) => {
  try {
    User.find({})
      .then(data => res.send(data))
      .catch(err => res.status(500).send('Something went wrong'));
  } catch (err) {
    console.log(err);
    res.status(500).send('ERR');
  }
};

module.exports = { registerUser, getUser };
