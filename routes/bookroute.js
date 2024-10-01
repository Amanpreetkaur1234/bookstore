const express=require("express");
const router=express.Router();

const{createbook,getbook,updatebook,deletebook}=require("../controllersbookController");

router.post("/",createbook);
router.get("/:id",getbook);
router.put("/id",updatebook);
router.delete("/:id",deletebook);



module.exports=router;