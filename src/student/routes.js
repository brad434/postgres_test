const { Router } = require("express"); //1st
const controller = require("./controller");

const router = Router(); //2nd

router.get("/", controller.getStudents);

// router.get("/", (req, res) => {res.send("Using api route")}); //3rd
router.post("/", controller.addStudent);
router.get("/:id", controller.getStudentsById);

module.exports = router;
