const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  // id _id
  const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
  return token;
  //  console.log(token);
};

exports.generateToken = generateToken;
