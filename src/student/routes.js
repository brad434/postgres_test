const { Router } = require("express"); //1st
const controller = require("./controller");

const router = Router(); //2nd

router.get("/", controller.getStudents);

router.post("/", controller.addStudent);
router.get("/:id", controller.getStudentsById);
router.delete("/:id", controller.deleteStudentById);

module.exports = router;
