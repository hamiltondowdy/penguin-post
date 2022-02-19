const { User } = require('../models');

const userData = [
    {
      id: 1,
      username: 'cheyne',
      email: 'cheyne@mail.com',
      password: 'pass',
      icon: '1',
      hero: 'https://schoolsweek.co.uk/wp-content/uploads/2019/09/Super-hero-head-sm.jpg'
    },
    {
        id: 2,
        username: 'mario',
        email: 'mario@mail.com',
        password: 'pass',
        icon: '1',
        hero: 'https://schoolsweek.co.uk/wp-content/uploads/2019/09/Super-hero-head-sm.jpg'
    },
    {
        id: 3,
        username: 'cory',
        email: 'cory@mail.com',
        password: 'pass',
        icon: '1',
        hero: 'https://schoolsweek.co.uk/wp-content/uploads/2019/09/Super-hero-head-sm.jpg'
    },
    {
        id: 4,
        username: 'jeff',
        email: 'jeff@mail.com',
        password: 'pass',
        icon: '1',
        hero: 'https://schoolsweek.co.uk/wp-content/uploads/2019/09/Super-hero-head-sm.jpg'
    },
    {
        id: 5,
        username: 'court',
        email: 'court@mail.com',
        password: 'pass',
        icon: '1',
        hero: 'https://schoolsweek.co.uk/wp-content/uploads/2019/09/Super-hero-head-sm.jpg'
    },
    {
        id: 6,
        username: 'hamilton',
        email: 'hamilton@mail.com',
        password: 'pass',
        icon: '1',
        hero: 'https://schoolsweek.co.uk/wp-content/uploads/2019/09/Super-hero-head-sm.jpg'
    }
  ];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;