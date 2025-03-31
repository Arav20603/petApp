import express from "express";
import { createPet, getPets } from "../../controllers/web/petController.js";

const router = express.Router();

router.post("/pets", createPet); // Create a pet category
router.get("/pets", getPets); // Get all pet categories

export default router;
