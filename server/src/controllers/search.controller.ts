
import type {Request, Response} from "express";
import Provider from "../models/Provider.js"

export const searchProviders = async(
    req:Request,
    res:Response
)=>{
    try{
        const {service , pincode} = req.query;
        if(!service || !pincode){
            return res.status(400).json({
           message: "service and pincode are required"
          })
        }
        const providers = await Provider.find({
      service: String(service).toLowerCase(),
      pincode,
    });
    res.json({
      message: "success",
      count: providers.length,
      data :providers
    });
    }catch(error){
        res.status(500).json({error: "Server Error"})
    
    }
}