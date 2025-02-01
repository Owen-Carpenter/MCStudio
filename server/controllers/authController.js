import BookingModel from "../models/booking.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const handleLogin = {
    login: async (req, res) => {
        try {
            const { username, password } = req.body;

            // User/Pwd Not Found
            if (!username || !password) return res.status(400).json({ 'message': 'Username and password are required' });

            // Find the user
            const foundUser = await BookingModel.findOne({ username });
            if (!foundUser) return res.sendStatus(401); // Unauthorized

            // Check for match
            const userMatch = await bcrypt.compare(password, foundUser.password);
            if (userMatch) {
                // Grant access to user
                const accessToken = jwt.sign(
                    { "username": foundUser.username },
                    process.env.ACCESS_TOKEN_SECRET,
                    { expiresIn: '30s' }
                );

                const refreshToken = jwt.sign(
                    { "username": foundUser.username },
                    process.env.REFRESH_TOKEN_SECRET,
                    { expiresIn: '1d' }
                );

                // Save refreshToken with current user
                foundUser.refreshToken = refreshToken;
                await foundUser.save();

                // Send refresh token as a cookie and access token as a response
                res.cookie('jwt', refreshToken, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });
                res.json({ accessToken });
            } else {
                res.sendStatus(401); // Unauthorized
            }
        } catch (err) {
            res.status(500).json({ 'message': err.message });
        }
    }
};

export default handleLogin;