var express = require("express");
const { check, validationResult } = require("express-validator");
var router = express.Router();
const userauth = require("../../api/middleware/userauth");
const managerauth = require("../../api/middleware/managerauth");

const {
  applyleave,
  getLeave,
  deleteLeave,
  getleaveseeds
} = require("../leaves/leavesController/applyleave");
const {leaveRequest,updateRequest}=require("../leaves/leavesController/LeaveRequest")

router.post("/applyleave", userauth, applyleave);
router.get("/getleave", userauth, getLeave);
router.delete("/deleteleave/:id", userauth, deleteLeave);
router.get("/leave_seeds",userauth,getleaveseeds)
router.get("/manager/leave/employees",managerauth,leaveRequest)
router.post("/manager/updateleave/employees/:id/:value",managerauth,updateRequest)


module.exports = router;
