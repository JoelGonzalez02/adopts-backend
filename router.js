import express from 'express';
import signUpTemplate from './models/SignUpModel.js';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/signup', async (req, res) => {

    const salt = await bcrypt.genSalt(10);
    const securePassword =  await bcrypt.hash(req.body.password, salt);

    const signUpUser = new signUpTemplate({
        fullName: req.body.fullName,
        username: req.body.username,
        email: req.body.email,
        password: securePassword
    })
    signUpUser.save()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            console.log(err)
        })
})

export default router;

