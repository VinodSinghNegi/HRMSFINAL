var express = require("express");
const { check, validationResult } = require("express-validator");
var router = express.Router();
const userauth = require("../../api/middleware/userauth");
const {
  applyleave,
  getLeave,
  deleteLeave,
  getleaveseeds
} = require("../leaves/leavesController/applyleave");

router.post("/applyleave", userauth, applyleave);
router.get("/getleave", userauth, getLeave);
router.delete("/deleteleave/:id", userauth, deleteLeave);
router.get("/leave_seeds",userauth,getleaveseeds)

module.exports = router;
