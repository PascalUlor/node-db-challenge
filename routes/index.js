const express = require("express");
const Controllers = require("../controllers");
const router = express.Router();

router.get("/", Controllers.getAllProjects);
router.get("/:id", Controllers.getProjectById);
router.post("/", Controllers.createProject);
router.get("/:id/action", Controllers.getInfoById);
router.put("/:id", Controllers.updateProject);
router.delete("/:id", Controllers.deleteProject);

module.exports = router;
