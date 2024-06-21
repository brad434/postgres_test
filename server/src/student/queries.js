const getStudentsQuery = "SELECT * FROM students";

//the dollar sign "$" is our parameter that we will be passing in our query
const getStudentById = "SELECT * FROM students WHERE id = $1";

// s is the alias. s.email is the column email and the s alone is the table students
// const checkEmailExists = "SELECT s.email FROM students s WHERE s.email = $1";

const checkEmailExists = "SELECT email FROM students WHERE email = $1";

const addStudentQuery =
  "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";

//it deletes the row
const removeStudent = "DELETE FROM students WHERE id = $1";

const updateStudentName = "UPDATE students SET name = $1";

module.exports = {
  getStudentsQuery,
  getStudentById,
  checkEmailExists,
  addStudentQuery,
  removeStudent,
  updateStudentName,
};
