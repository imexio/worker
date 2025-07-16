const express = require("express");
const UserController = require("../controllers/userController");
const { authenticateToken } = require("../middleware/authMiddleware");

const router = express.Router();

// GET /api/profile - Get user profile
router.get("/profile", authenticateToken, UserController.getProfile);

// PUT /api/profile - Update user profile
router.put("/profile", authenticateToken, UserController.updateProfile);

module.exports = router;
