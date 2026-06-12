import express from "express";
import { joinWaitlist } from "../controllers/waitlistController.js";
import { getWaitlistUsers } from "../controllers/getWaitlistUsers.js";

const router = express.Router();

router.post("/", joinWaitlist);
router.get("/users", getWaitlistUsers);

export default router;
