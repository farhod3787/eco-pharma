const express = require('express')
const router = express.Router();
const Categories = require('../models/categories');
const User = require('../models/users')

router.post('/post/:token', async (request, response, next) =>{
    var token = request.params.token;
    var users = await User.find();
    var obj = User.verifyOfUser(users, token);

    if(obj.isModerator) {
        var body = request.body;
        var categori = {
            name: body.name,
            id : body.id
    }
    const categories = new Categories(categori);
    
    categories.save().then( res => {
        response.status(200).json({message: "New Categories Added"})
    })
    .catch( err =>{
        console.log(err);
        response.status(400).json({message: "Error in Add New Categories"})
    })
}
    else {
        response.status(400).json({message: "This is not moderator"})
}
})

router.get('/get', (request, response, next) =>{
    Categories.find().then( all =>{
        response.status(200).json(all);
    }).catch( err =>{
        console.log(err)
        response.status(400).json({message: "Error in Get Categories"})
    })
})


router.get('/getCategory/:id', (request, response) => {
        var id = request.params.id;
        Categories.findById(id).then( one => {
            response.status(200).json(one);
        }).catch( err =>{
            console.log(err);
            response.status(400).json({message : "Error in Get Category"})
        })
})  

router.delete('/delete/:id/:token', async (request, response, next) =>{
        var id = request.params.id;
        var token = request.params.token;
        var users = await User.find();

        var obj = User.verifyOfUser(users, token);
        if(obj.isModerator) {
            await Categories.findByIdAndDelete(id).then( res =>{
                    response.status(200).json({message: "Category Deleted !"})
            }).catch( err =>{
                    console.log(err);
                    response.status(400).json({message: "Error in Deleted Categories"})
            })
        }
        else {
                response.status(400).json({message: "This is not Moderator"})
        }
})

router.patch('/update/:id/:token', async (request, response, next) =>{
    var id = request.params.id;
    var token = request.params.token;
    var users =  await User.find();
    var body = request.body;

    var obj = User.verifyOfUser(users, token);
    if (obj.isModerator) {
        await Categories.findByIdAndUpdate(id, {$set: body}, {new: true}).then( res =>{
                if(res) {
                    response.status(200).json({message: "Category Updated"});
                }
                else {
                        response.status(400).json({message: "Error in Update Category"});
                }
        }).catch( err =>{
                console.log(err);
                response.status(400).json({message: "This is Not Moderator"})
            
        })
    }
})

module.exports = router;

