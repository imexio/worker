const User = require("../models/User");

class UserService {
    static async getUserById(userId) {
        const user = await User.findById(userId).select("-password");

        if (!user) {
            throw new Error("User not found");
        }

        return user;
    }

    static async updateUserProfile(userId, updates) {
        delete updates.password;
        delete updates.role;
        delete updates.ratings;
        delete updates.averageRating;
        delete updates.totalRatings;

        const user = await User.findByIdAndUpdate(
            userId,
            { $set: updates },
            { new: true, runValidators: true }
        ).select("-password");

        if (!user) {
            throw new Error("User not found");
        }

        return user;
    }
}

module.exports = UserService;
