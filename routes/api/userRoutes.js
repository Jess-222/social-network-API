const router = require('express').Router();
const {
  getAllUsers,
  // getUser,
  createUser,
  // updateUser,
  // deleteUser,
  // addFriend,
  // RemoveFriend
} = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/courses/:userID
// router
//   .route('/:courseId')
//   .get(getSingleCourse)
//   .put(updateCourse)
//   .delete(deleteCourse);

  //api/users/:userID/friends/:friendID

module.exports = router;
