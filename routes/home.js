const express = require('express');
const router = express.Router();
const user = require('../models/user');
const controller = require('../controller/users')

router.get('/user', controller.getView)


router.post('/addUsers', async (req, res) => {
    console.log(req.body.username);
    try {
        const username = req.body.username;
        const email = req.body.email;
        const phoneNumber = req.body.phoneNumber
        const data = await user.create({
            username: username,
            email: email,
            phoneNumber: phoneNumber
        })
        res.json({ userData: data })
    }
    catch (err) {
        console.log(err);
    }
})


router.get('/users', controller.getUsers)

router.delete('/deleteUser/:id', controller.deleteUser)


module.exports = router