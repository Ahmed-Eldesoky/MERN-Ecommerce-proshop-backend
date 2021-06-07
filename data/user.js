const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin user",
    email: "admin@example.com",
    password: bcrypt.hashSync("1234560", 10),
    isAdmin: true,
  },
  {
    name: "witcher",
    email: "witcher@example.com",
    password: bcrypt.hashSync("1234560", 10),
  },
  {
    name: "wizerd",
    email: "wizerd@example.com",
    password: bcrypt.hashSync("1234560", 10),
  },
];

module.exports = users;
