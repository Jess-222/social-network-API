const connection = require('../config/connection');
const { User, Thought } = require('../models');


connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  await User.deleteMany({});

  await Thought.deleteMany({});

  //Create empty array to hold users
  const users = [
    {
      username: "Jess",
      email: "jess@gmail.com"
    },
    {
      username: "Leo",
      email: "leo@gmail.com"
    }
  ];

  await User.collection.insertMany(users);


  //Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
