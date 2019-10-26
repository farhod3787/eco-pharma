const express = require('express');
const User = require('../models/users');

const jwt = require('jsonwebtoken');

const router = express.Router();

 //                                                               R e g i  s t r a t s i o n
router.post('/post', async function (request, response, next) {
    console.log("OKOKOKOKOKO");
   var body = request.body;
    let user = {
        number: body.number,
        login : body.login,
        password: await User.hashofPassword(body.password),
        email: body.email,
    }
    const use = new User(user);

    console.log(user);

        let token = await User.generateToken(use.login, use.password);
        // let token = await User.generateToken(use.number, use.kod);

    use.save().then( (res) =>{
        response.status(200).json({token: token})
    }).catch( err =>{
        console.log(err);
        response.status(404).json({message: "Error in Saved user"})
    })
});

//                                                      Tekshirish
 
router.get('/verifyUser/:token', async function(request, response) {
   console.log("This verify")
   
     var token = request.params.token;
        var users = await User.find();

    var obj = User.verifyOfUser(users, token);
    response.status(200).json(obj);

    // response.status(200).json({token});
})
 //                                                                K i r  i  sh

router.post('/sign', async function(request, response) {
    var body = request.body;
    var data = {}
    var users = await User.find();
    console.log(users);
    var obj = User.verifyUser(users, body);

    if(obj.isUser) {
        data.token = obj.token;
        data.isAdmin = obj.isAdmin;
        data.isModerator = obj.isModerator;
        response.status(200).json(data)
    }
    else {
        response.status(404).json({message: "User Not found!"})
    }

});

//                                                                  U s e  r  ni  ko'rish
router.get('/getUser/:id', async function(request, response) {
    var data = {};
    var success = false;
    var id = request.params.id;
    
    var body = request.body;
    var users = await User.find();

    var obj = User.verifyOfUser(users, body);

    if(obj.isUser) {
        success = true;
        data.user = await User.findById(id).then( (res)=>{
            if(!res) {
                success = false;
                data.message = "User not found"
                return null;
            }
            else {
                return res;
            }
        })
        .catch( (err) =>{
            console.log(err);
            success = false;
            
        });
        if(success) {
            response.status(200).json();
        }
        else {
            response.status(400).json() 
        }
    }
})

//                                                              Hammani ko'rish
 
router.get('/getModerators', ( request, response) =>{
    User.find({number: '1'}, function(err, users){
        response.status(200).json(users);
    }) 
})

router.get('/getall', (request, response, next) =>{
    var users = [];
    User.find().then( (all) =>{
        for (let i=all.length-1; i>=0; i--) {
            users.push(all[i]);
        }
        response.status(200).json(users);
    }).catch(  (err)=>{
        console.log(err)
        response.status(400).json({message: "Error in Get All Users"});

    })
});

//                                                             O' c h i  r i s h

router.delete('/delete/:id/:token', async function (request, response, next ){
    var data = {};
    var id = request.params.id;
    var token = request.params.token;
    var users = await User.find();
    var success = false;
    var obj = User.verifyOfUser(users, token);

    if (obj.isAdmin) {
        success = true
            await User.findById(id).then( (res) =>{
                if(res) {
                    return res
                }
                else {
                    success = false
                    data.message = "This User not found";
                    return null;
                }
            }).catch( err =>{
                success = false
                response.status(400).json({message: "User not found"});
            })
             
                await User.findByIdAndRemove(id).catch( err => {
                    success = false;
                })
                if(success) {
                    response.status(200).json({message: "User deleted"})
                }
                else {
                    response.status(400).json({message: "Error in Delete User"})
                }
            }
    
    else {
        response.status(400).json(data)
    }

})

module.exports = router