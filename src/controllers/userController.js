const UserService = require("../services/userService");

class UserController {
    static async getProfile(req, res) {
        try {
            const userId = req.user.userId;
            const user = await UserService.getUserById(userId);

            res.json({
                message: "Profile retrieved successfully",
                user,
            });
        } catch (error) {
            if (error.message === "User not found") {
                return res.status(404).json({ message: error.message });
            }
            res.status(500).json({
                message: "Server error",
                error: error.message,
            });
        }
    }

    static async updateProfile(req, res) {
        try {
            const userId = req.user.userId;
            const updates = req.body;

            const user = await UserService.updateUserProfile(userId, updates);

            res.json({
                message: "Profile updated successfully",
                user,
            });
        } catch (error) {
            if (error.message === "User not found") {
                return res.status(404).json({ message: error.message });
            }
            res.status(500).json({
                message: "Server error",
                error: error.message,
            });
        }
    }
}

module.exports = UserController;
