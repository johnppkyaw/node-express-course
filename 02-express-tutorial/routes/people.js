const express = require("express");
const router = express.Router();
const { addPerson, getPeople, getPersonById, editPersonById, deletePersonById } = require("../controllers/people.js");

router.get("/", getPeople);
router.get("/:id", getPersonById);
router.put("/:id", editPersonById);
router.delete("/:id", deletePersonById);
router.post("/", addPerson);


module.exports = router;
