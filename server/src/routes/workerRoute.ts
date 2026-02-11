import {Router} from "express";
import  type {Request , Response} from "express";

import Provider from "../models/Provider.js";

const router = Router();

router.post("/register" ,async (req:Request, res:Response)=>{
    const {name , phone , service , pincode , location , city } = req.body;
    
    if(!name || !phone || !service || !pincode || !location || !city){
        return res.status(400).json({
            message: "All fields are required"
        })
    }

    try{
        const providers = await Provider.create({
            name,
            phone,
            service,
            pincode,
            location,
            city
        })
        res.json({
            message: "success",
            data: providers
        })
        } catch(error){
        res.status(500).json({error: "Server Error"})
        }
    }
)

export default router;

