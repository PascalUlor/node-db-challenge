const express = require("express");
const Controllers = require("../controllers");

const router = express.Router();

router.get("/", Controllers.getActions);
router.post("/:id", Controllers.createAction);
router.get("/:id", Controllers.getActions);

module.exports = router;
