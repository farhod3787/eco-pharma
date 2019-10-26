const express = require('express');
const User = require('../models/users');
const Orders = require('../models/orders');

const localEvent = require('./../utils/localEvent');


const router = express.Router();

router.post('/post/:token', async (request, response) => {
    
    var token = request.params.token;
    var users = await User.find();

    var obj = User.verifyOfUser(users, token);
    
    var body = request.body;
    // var q = body.pharms.length;                  vaqtincha
    
    // farmname : any;
    // farmprice ;
    // var farms = {
    //     farm : []
    // }
    
    var farms = [];

    // for(let i=0; i<q; i++) {
    //     let obj = {
    //         farname: body.pharms[i].pharmName,              vaqtincha
    //         farprice: body.pharms[i].pharmPrice,
    //       }
    //       farms.push(obj);
    // }
    console.log(farms) 
 

        var order = 
        {
            how: body.how,
            
            pharms : body.pharms,
            rate : body.rate,
            date : new Date(),
            status : "Waiting",
            maker : obj.maker,
            payType: body.payType,
            scoreNumber: body.scoreNumber,
            forward: body.forward,
            address: body.address,
            telnumber: body.telnumber
        }
    console.log("Order");
    console.log(order);

    var order = new Orders(order);
    order.save().then( async res =>{

        var orders = await Orders.find({status:"Waiting"});
        localEvent.emit('orders', orders.length);

        response.status(200).json({message: "Successs"})
    }).catch( err =>{
        console.log(err);
        response.status(400).json({message: "Error"})
    })
})

router.get('/getall', async (request, response) =>{

    await Orders.find({status: "Waiting"}).then( async all =>{


        var orders = await Orders.find({status:"Waiting"});
        localEvent.emit('orders', orders.length);


        // localEvent.emit('orders', all.length);
        response.status(200).json(all);

    }).catch( err =>{

        response.status(400).json({message: "Error in GetAll Orders"})

    }) 
})

router.get('/getdoing', async ( request, response) =>{
    await Orders.find({status: "Doing"}).then( all =>{
        response.status(200).json(all);
    })
})
router.get('/getsucces', async (request, response) =>{

    await Orders.find({status: "Success"}).then( all =>{
        // localEvent.emit('orders', all.length);
        response.status(200).json(all);

    }).catch( err =>{

        response.status(400).json({message: "Error in GetAll Orders"})

    }) 
})

//                                                          BITTA USERGA TEGIHSLI BUYURTMA 
router.get('/get/:token', async (request, response) =>{
    var token = request.params.token;
    var users = await User.find();
    var obj = User.verifyOfUser(users, token);
    var id = obj.userId;
    var orders = [];

if(obj.userId) {

    await  Orders.find().then( all =>{
        
        for (let i=0; i<=all.length-1; i++) {
            if(id == all[i].userId) {
            
                orders.push(all[i]);
            }
        }
        response.status(200).json(orders)    
    }).catch( err => {
        console.log(err);
        response.status(400).json({message: "Error in get Orders"})
    })
    }
    else {
        response.status(400).json({message: "This is not user"} )    
    }

}  )

//  --------                                                  BITTA USERGA TEGISHLI BUYURTMA -------------
router.patch('/patch/:id/:token', async (request, response) =>{
    var id = request.params.id;
    var token = request.params.token;
    
    var users = await User.find();
    var body = request.body;
    body.status = "Doing";

    var obj = User.verifyOfUser(users, token);

    if (obj.isModerator) {
        await Orders.findByIdAndUpdate(id, {$set: body}, {new: true}).then( async res =>{

            if(res) {
                    // localEvent.emit('orders', all.length);

                    var orders = await Orders.find({status:"Waiting"});
                    localEvent.emit('orders', orders.length);

                    response.status(200).json({message: "Status: Success"})
            }
            else {
                    response.status(400).json({message: "Error in status"})
            }
        }).catch( err =>{
                console.log(err);
                response.status(400).json(err);
        })
    }
} )


router.patch('/update/:id/:token', async (request, response) =>{
    var id = request.params.id;
    var token = request.params.token;
    
    var users = await User.find();
    var body = request.body;
    body.status = "Success";

    var obj = User.verifyOfUser(users, token);

    if (obj.isModerator) {
        await Orders.findByIdAndUpdate(id, {$set: body}, {new: true}).then( async res =>{

            if(res) {
                    
                var orders = await Orders.find({status:"Waiting"});
                localEvent.emit('orders', orders.length);

                    response.status(200).json({message: "Status: Success"})
            }
            else {
                    response.status(400).json({message: "Error in status"})
            }
        }).catch( err =>{
                console.log(err);
                response.status(400).json(err);
        })
    }
} )

router.delete('/delete/:id', async (request, response)=>{
    var id = request.params.id;
    await Orders.findByIdAndDelete(id).then( res =>{
        response.status(200).json();
    }).catch( err =>{
        response.status(400).json(err);
    })
})



exports.geta = async function () {
    var orders = await Orders.find();
        return orders.length;
}

 
 
module.exports = router;