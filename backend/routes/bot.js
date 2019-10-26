const express = require('express');
const router = express.Router()
const Pharmacy = require('../models/pharmacy');
const Orders = require('../models/orders');

const BOT_TOKEN = "some_token";

router.get(`/${BOT_TOKEN}/pharms`, (request, response) => {
    Pharmacy.find().then(pharms => {
        response.status(200).json({ pharms })
    }).catch(e => {
        console.log(e);
        response.status(400).json()
    })
})

router.post(`/${BOT_TOKEN}/test`, (request, response) => {
    console.log('Bot connected');
    console.log(request);
    response.status(200).json({ data: "Success" })
})

router.get(`/${BOT_TOKEN}/search`, (request, response) => {
    var body = request.body;
    var thisname = body.name;
    Pharmacy.find({ name: thisname }).then(all => {
        response.status(200).json(all);
    }).catch(err => {
        console.log(err);
        response.status(400).json({ message: "Error in search Phram" })
    })
})


router.post(`/${BOT_TOKEN}/orders`, async(request, response) => {
    var body = request.body;
    console.log(body);

    let pharms = await Pharmacy.find()
    let summ = 0,
        i = 0;
    body.pharms.forEach(pharrm => {
        summ += (pharms.find(phaarm => phaarm._id == pharrm)).price * Number(body.counts[i]);
        i++;
    })


    var order = {
        how: body.counts,
        pharms: body.pharms,
        rate: summ,
        date: new Date(),
        status: "Waiting",
        // maker : obj.maker,
        payType: "Naqd",
        // scoreNumber: ,
        forward: "Uy yoki office ga eltish",
        address: body.description,
        telnumber: body.phone
    }
    var orders = new Orders(order);
    orders.save().then(() => {
        response.status(200).json()
    }).catch(err => {
        response.status(400).json({ message: "Error in save Order" });
    })

})


module.exports = router