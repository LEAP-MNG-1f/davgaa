import { User } from "../model/user.js";

const createUser = async (req, response) => {
  const result = await User.create({
    name: "davgaa",
    email: "davgaa@gmail.com",
    password: "1234",
    phoneNumber: "99883439",
  });
  response.json({
    succes: true,
    data: result,
  });
};
const getAllUsers = async (req, response) => {
  const result = await User.find();
  response.json({
    succes: true,
    data: result,
  });
};
export { createUser, getAllUsers };
