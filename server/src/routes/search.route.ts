import {Router} from "express";
import { searchProviders} from "../controllers/search.controller.js"

const router = Router();

router.get("/" ,searchProviders);

export default router;
