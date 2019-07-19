const express = require("express");
const Controllers = require("../controllers");
const router = express.Router();

router.get("/", Controllers.getAllProjects);
router.get("/:id", Controllers.getProjectById);
router.post("/", Controllers.createProject);

module.exports = router;
