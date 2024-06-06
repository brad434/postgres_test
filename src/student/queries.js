const getStudentsQuery = "SELECT * FROM students";

//the dollar sign "$" is our parameter that we will be passing in our query
const getStudentById = "SELECT * FROM students WHERE id = $1";

const checkEmailExists = "SELECT s FROM students s WHERE s.email = $1";

module.exports = {
  getStudentsQuery,
  getStudentById,
  checkEmailExists,
};
