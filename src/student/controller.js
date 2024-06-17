const pool = require("../../db");
const {
  getStudentsQuery,
  getStudentById,
  checkEmailExists,
} = require("./queries");

// const getStudents = (req, res) => {
//   pool.query("SELECT * FROM students", (error, results) => {
//     if (error) throw error;
//     res.status(200).json(results.rows);
//   });
// };

const getStudents = (req, res) => {
  pool.query(getStudentsQuery, (error, results) => {
    if (error) throw error;
    // if the response (res) is true then return our data in a json format from the results data and grabbing the rows of the database
    res.status(200).json(results.rows);
  });
};

const getStudentsById = (req, res) => {
  //the id will be coming back to us as a string so we need to parse it to a number
  // the .params is define from our routes where we do '/:id' so its the endpoint of the link
  const id = parseInt(req.params.id);

  pool.query(getStudentById, [id], (error, results) => {
    if (error) throw error;

    if (results.rows > 0) {
      res.status(200).json(results.rows);
    } else {
      res.status(404).json({ message: "Student not found" });
    }
  });
};

const addStudent = (req, res) => {
  const { name, email, age, dob } = req.body;

  //check if the email exist
  pool.query(checkEmailExists, [email], (error, results) => {
    if (results.rows.length) {
      res.send("Email already exists.");
    }
  });
};

module.exports = { getStudents, getStudentsById, addStudent };
