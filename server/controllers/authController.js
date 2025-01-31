import BookingModel from "../models/booking";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const handleLogin = {
    login: async (req, res) => {
        try{
            const {username, password} = req.body;
            //User/Pwd Not Found
            if(!username || !password) return res.status(400).json({'message': 'Username and password are required'});
            //Find the user
            const foundUser = await BookingModel.findOne({username});
            if(!foundUser) res.sendStatus(401);
            //Check for match
            const userMatch = await bcrypt.compare(password, foundUser.password);
            if(userMatch){
                const accessToken = jwt.sign(
                    {"username": foundUser.username},
                    {expiresIn: '1h'}
                )
                res.json({accessToken});
            } else {
                res.sendStatus(401);
            }
        } catch (err) {
            res.status(500).json({'message': err.message})
        }
    }
}