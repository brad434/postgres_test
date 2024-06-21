const pool = require("../../db");
const {
  getStudentsQuery,
  getStudentById,
  checkEmailExists,
  addStudentQuery,
  removeStudent,
  updateStudentName,
} = require("./queries");

// const getStudents = (req, res) => {
//   pool.query("SELECT * FROM students", (error, results) => {
//     if (error) throw error;
//     res.status(200).json(results.rows);
//   });
// };

const getStudents = (req, res) => {
  // try {
  // } catch (error) {
  //   console.error(error);
  //   }
  pool.query(getStudentsQuery, (error, results) => {
    res.status(200).json(results.rows);
    console.log("Completed students.");
    // if the response (res) is true then return our data in a json format from the results data and grabbing the rows of the database
    // addStudentQuery;
  });
};

const getStudentsById = (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`Fetching student with id: ${id}`);

  pool.query(getStudentById, [id], (error, results) => {
    if (error) throw error;

    console.log("Query results:", results.rows);

    if (results.rows.length === 0) {
      return res.status(404).send("Student not found");
    }
    res.status(200).json(results.rows[0]);
  });
};

const addStudent = (req, res) => {
  const { name, email, age, dob } = req.body;

  //check if the email exist
  pool.query(checkEmailExists, [email], (error, results) => {
    //if there is something in the array , aka an email exisiting
    if (results.rows.length) {
      res.send("Email already exists.");
    }

    //add student to db
    pool.query(addStudentQuery, [name, email, age, dob], (error, results) => {
      if (error) throw error;
      res.status(201).send("Students has been created.");
      console.log("Student create:", { name, email, age, dob });
    });
  });
};

const deleteStudentById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(getStudentById, [id], (error, results) => {
    const noStudentFound = !results.rows.length;
    if (noStudentFound) {
      res.send("Student does not exist in the database");
    }

    pool.query(removeStudent, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Student removed successfully.");
    });
  });
};

const updateStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  pool.query(getStudentById, [id], (error, results) => {
    const noStudentFound = !results.rows.length;
    if (noStudentFound) {
      res.send("Student does not exist in the database");
    }
    pool.query(updateStudentName, [name], (error, results) => {
      if (error) throw error;
      res.status(200).send("Student has been updated");
    });
  });
};

module.exports = {
  getStudents,
  getStudentsById,
  addStudent,
  deleteStudentById,
  updateStudent,
};
