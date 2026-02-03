// import { Request, Response } from "express";
// import { Provider } from "../models/Provider";

// export const searchProviders = async (req: Request, res: Response) => {
//   try {
//     const { lat, lng, skill, radius } = req.query;

//     if (!lat || !lng) {
//       return res.status(400).json({ error: "Location is required" });
//     }

//     const latitude = Number(lat);
//     const longitude = Number(lng);
//     const searchRadius = Number(radius) || 5000; // Default 5km in meters

//     // Build the query
//     let query: any = {
//       location: {
//         $near: {
//           $geometry: {
//             type: "Point",
//             coordinates: [longitude, latitude] // MongoDB uses [Lng, Lat]
//           },
//           $maxDistance: searchRadius
//         }
//       }
//     };

//     // Filter by skill if provided (e.g., "Plumber")
//     if (skill) {
//       query.skills = { $in: [new RegExp(skill as string, 'i')] }; // Case-insensitive
//     }

//     const providers = await Provider.find(query).limit(20);

//     res.json({
//       count: providers.length,
//       providers
//     });

//   } catch (error) {
//     res.status(500).json({ error: "Server Error" });
//   }
// };


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
      isActive: true
    }).sort({ rating: -1 });
    res.json({
      count: providers.length,
      providers
    });
    }catch(error){
        res.status(500).json({error: "Server Error"})
    
    }
}