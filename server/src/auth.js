// const express = require("express");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const pool = require("../db");

// const router = express.Router();

// const insertUserIntoDB = async (username, password) => {
//   try {
//     const query = {
//       text: "INSERT INTO user(username, password) VALUES ($1, $2) RETURNING *",
//       values: [username, password],
//     };
//     const results = await pool.query(query);
//     return results.rows[0];
//   } catch (error) {
//     console.log(error);
//   }
// };

// router.post("/register", async (req, res) => {
//   try {
//     const {username, password} = req.body;
//     const existingUser = {
//       text: 'SELECT * FROM user WHERE username = $1',
//       values: [username]
//     }
//     const existingUserResult = await pool.query(existingUser);
//     if(existingUserResult.rows.length > 0){
//       return res.status(400).json({message: 'User already exists'});
//     }

//     const saltRounds = 10;
//     const hashedPassword = await bcrypt.hash(password, saltRounds);
//     const userId = await insertUserIntoDB(username, hashedPassword);
//     const payload = {
//       userId: userId.id,
//       username: username,
//     },
//     const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15hr"})

//   } catch (error) {

//   }
// })
