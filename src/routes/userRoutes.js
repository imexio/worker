import express from "express";
import UserController from "../controllers/userController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET /api/profile - Get user profile
router.get("/profile", authenticateToken, UserController.getProfile);

// PUT /api/profile - Update user profile
router.put("/profile", authenticateToken, UserController.updateProfile);

export default router;
