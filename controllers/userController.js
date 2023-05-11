const { User, Thought } = require('../models');

module.exports = {
  //getAllUsers,
  // getUser,
  //createUser,
  // updateUser,
  // deleteUser,
  // addFriend,
  // RemoveFriend



  // Get all users
  
  async getAllUsers (req, res) {
    try {
      const userData = await User.find();
      res.json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get user
  async getUser(req, res) {
    try {
      const userData = await User.findOne({ _id: req.params.courseId })
        .select('-__v');

      if (!userData) {
        return res.status(404).json({ message: 'No course with that ID' });
      }

      res.json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create user
  async createUser(req, res) {
    try {
      const userData = await User.create(req.body);
      res.json(userData);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete user
  async deleteUser(req, res) {
    try {
      const userData = await User.findOneAndDelete({ _id: req.params.courseId });

      if (!userData) {
        res.status(404).json({ message: 'No course with that ID' });
      }

      await Thought.deleteMany({ _id: { $in: course.students } });
      res.json({ message: 'Course and students deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update user
  async updateUser(req, res) {
    try {
      const userData = await User.findOneAndUpdate(
        { _id: req.params.courseId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!userData) {
        res.status(404).json({ message: 'No course with this id!' });
      }

      res.json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
