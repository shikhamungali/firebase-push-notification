let express = require('express')
const router = express.Router()
let dotenv = require("dotenv")
const path = require('path'); 
dotenv.config({path:path.resolve(`${process.env.NODE_ENV}.env`)})

var FCM = require('fcm-node');
var serverKey=process.env.serverKey;
var fcm = new FCM(serverKey);


router.route('/send').post(async (req, res) => {
    var message = {
        to: req.body.to,
        notification: {
            title: 'firebase push notification',
            body: 'message from postman '
        },

        data: {
            title: 'hello world',
            body: 'hello world '
        }

    };

    fcm.send(message, function (err, response) {
        if (err) {
            return res.status(500).json(err)
        } else {
            return res.status(200).send({response:JSON.parse(response)})
        }

    });
})


module.exports = router