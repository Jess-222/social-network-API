const router = require('express').Router();
const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/courses/:userID
router
  .route('/:userId')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

  // api/users/:userID/friends/:friendID

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
