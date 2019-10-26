const express = require('express');
const Person = require('../models/person')
const routes = express();
const jwt = require('jsonwebtoken');


routes.post('/post', function(request, response) {
    var body = request.body;
    var person = {
        number: body.number,
        kod: body.kod
    }

    const pers = new Person(person);

    let token =   Person.generateToken(pers.number, pers.kod);

    pers.save().then( () =>{
        response.status(200).json({token: token})    
    }).catch( err =>{
        console.log(err);
        response.status(400).json({message: "Error"})    
    })
});

routes.get('/getPerson/:token', async function( request, response) {
    var object = []
    var token = request.params.token;
    var obj =  jwt.verify(token, 'pro');
    // console.log(obj.number)
    // console.log('obj.number')

   await Person.find().then( all => {
       for (let i=all.length-1; i>=0; i--) {
           if(obj.number == all[i].number) {
               object.push(all[i]); break;
           }
            // console.log(all[i].number);
       }
       response.status(200).json(object)
   })
})

routes.get('/get', async function(request, response) {
    Person.find().then( all =>{
        response.status(200).json(all);    
    })
})

routes.get('/verifyPerson/:token', async function(request, response) {
   
     var token = request.params.token;
        var persons = await Person.find();

    var obj = Person.verifyPerson(persons, token);
    response.status(200).json(obj);

    // response.status(200).json({token});
})
 

routes.patch('/patch/:id/:token', async (request, response) => {
        var body = request.body;
        var token = request.params.token;
        var id = request.params.id;
        var person = await Person.find();

        var obj = Person.verifyPerson(person, token);

        if (obj.isUser) {
            console.log("obj.isUser")
                await Person.findByIdAndUpdate(id,{$set:body},{new: true}).then( res =>{
                    console.log(res);
                    response.status(200).json({message: "Patch"})    
                }).catch( err =>{
                    console.log(err);
                    response.status(400).json({message: "Error Patch"});    
                })
        }
        else {
            response.status(400).json({message: "this not user"})
        }
})


routes.delete('/delete/:id', async (request, response) =>{
    var id = request.params.id;
    Person.findByIdAndRemove(id).then( res =>{
        response.status(200).json({message: "Person Deleted"})    

    }).catch( err =>{
        console.log(err);
        response.status(400).json({message:"Error in deleted"})    
    })    
})






module.exports = routes