import express from "express";
const router = express.Router();
import { createuser, getUserByName } from "../service/users.service.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


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
  const userFromDb = getUserByName(username);
  if(userFromDb){
    response.status(400).send({message : "Username already exists"})
  }else if(password.length < 8){
    response.status(400).send("Password must be greater than 8 characters")
// validation in node is for security
// validation in react is for user experience
  }
  else{
      // console.log(data);
  const hashedPassword = await generateHashedPassword(password);
  const result = await createuser({ username : username , password : hashedPassword });
  response.send(result);
  }
 
});

// login - login successful | invalid credentials

router.post("/login", express.json(), async (request, response) => {
    const {username , password} = request.body;
    const userFromDb = await  getUserByName(username);
    if(!userFromDb){
        response.status(400).send({message : "Invalid credentials"})
      }
      else{
        const storedPassword = userFromDb.password;
        const checkPassword = await bcrypt.compare(password,storedPassword);
        console.log(checkPassword);
        if(checkPassword){
            const token = jwt.sign({id : userFromDb._id},process.env.SECRET_KEY);
            response.send({message : "login success", token : token});
        }else{
            response.status(400).send({message : "Invalid credentials"})
        }
      }
   
  });


export default router;
