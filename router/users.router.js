import express from "express";
const router = express.Router();
import { createuser } from "../service/users.service.js";
import bcrypt from "bcrypt";


async function generateHashedPassword(password){
    const no_of_rounds = 10;
    const salt = await bcrypt.genSalt(no_of_rounds);
    const hashedPassword = await bcrypt.hash(password,salt);
    return hashedPassword;
  }
//   generateHashedPassword("Password@123");

// express.json() = middleware
router.post("/signup", express.json(), async (request, response) => {
  const {username , password} = request.body;
  // console.log(data);
  const hashedPassword = await generateHashedPassword(password);
  const result = await createuser({ username : username , password : hashedPassword });
  response.send(result);
});

export default router;
