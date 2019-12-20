const Leave = require("../leaves.model");
const LeaveTypesSeeds = require("../leaveType.model");

const leaveRequest=async (req,res,next)=>{

    try {
        let leave=await Leave.find({reportingManagerId:req._id}).populate("userId leaveData","name")
        if(!leave ){
            return res.status(400).send({msg:"No request available"})
        }
        leave=leave.filter(e=>e.Status!=="Approved" && e.Status!=="Reject")
        res.send(leave)
        next()
    } catch (err) {
        console.log(err.message);
        res.status(500).send("leave Request Error")
    }
}

const updateRequest=async (req,res,next)=>{
    try {
        const {id,value}=req.params
        const leave=await Leave.findByIdAndUpdate(id,{Status:value},{
            new:true
        }).populate("userId leaveData","name")
        if(!leave){
            return res.status(400).send({msg:"No request available"})
        }
        if(value==="Approved"){
            return res.send(leave)
        }
        res.send("succesfully updated")
       
        next()
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Error updating")
        
        
    }

}

module.exports={leaveRequest,updateRequest}