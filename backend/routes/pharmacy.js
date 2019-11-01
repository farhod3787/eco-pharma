const express = require('express');

const Pharmacy = require('../models/pharmacy');
const User = require('../models/users');

const multer = require('multer');

const router = express.Router();

const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg'
}


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE_MAP[file.mimetype];
        let error = new Error("Errorrr");
        if (isValid) {
            error = null;
        }
        cb(error, "backend/images");
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const ext = MIME_TYPE_MAP[file.mimetype];
        cb(null, name + '-' + Date.now() + '.' + ext);
    }
})

router.post('/post/:token', multer({ storage: storage }).single('image'), async(request, response, next) => {
    var body = request.body;
    var token = request.params.token;
    var users = await User.find();

    const file = request.file;

    var obj = User.verifyOfUser(users, token);
    var pharm = {
        name: body.name,
        logo: file.filename,
        price: body.price,
        inform: body.inform,
        sort: body.sort,
        sale: body.sale,
        roomy: body.roomy,
        pod_category: body.pod_category,
        rate: body.rate
    }
    var pharmacy = new Pharmacy(pharm);

    if (obj.isModerator) {
        console.log("AAAAAA" + body.pod_category);
        console.log(pharmacy);

        pharmacy.save().then(res => {
            response.status(200).json(res);
        }).catch(err => {
            console.log(err);
            response.status(400).json({ message: "Error in Saved Pharm" })
        })
    } else {
        response.status(400).json({ message: "This is not Moderator" });
    }

})

router.get('/getfile', function(req, res) {
    var body = req.body;
    res.json({ 'file': '/files' + body });
});


router.get('/getCat/:name', (request, response) =>{
   var name = request.params.name;
   Pharmacy.find({roomy: name}).then( res =>{
     response.status(200).json(res)
   }).catch( err =>{
      response.status(400).json(err)
})
})

router.get('/getall', async(request, response, next) => {

    let pharms = await Pharmacy.find();
    if (pharms.logo) {
        pharms.logo = "/files/" + pharms.logo;
    }
    response.status(200).json(pharms)

    // var pharms = [];
    // Pharmacy.find().then( (all)=>{
    //     for(let i=all.length-1; i>=0; i--){
    //             pharms.push(all[i]);
    //     }
    //     response.status(200).json(pharms);
    // }).catch( (err) =>{
    //     console.log(err);
    //     response.status(400).json({message: "Error in Get Pharms"});
    // })

})

router.get('/getCat2', async function(request, response) {

    // Pharmacy.find({sale: 0}).toArray( (result) =>{
    //     console.log(result);
    //     response.status(200).json(result)
    // })

    var pharms = [];
    var q = 0;
    Pharmacy.find({roomy: 'Testing updated'}).then(all => {
        for (let i = all.length - 1; i >= 0; i--) {
            if (all[i].sale !== 0) {
                q++;
                pharms.push(all[i]);
            }
            if (q == 5) break;
        }
        console.log("AAA");
        console.log(pharms);
        response.status(200).json(pharms);
    }).catch(err => {
        response.status(400).json({ message: "Error in get Sale" })
    })
})

router.get('/getCat1', async function(request, response) {
    var pharms = [];
    var q = 0;
    Pharmacy.find({roomy: 'New Category'}).then(all => {
        for (let i = all.length - 1; i >= 0; i--) {
            q++;
            pharms.push(all[i]);
            if (q == 5) { break };
        }
        response.status(200).json(pharms);
    }).catch(err => {
        response.status(400).json({ message: "Error in get5 pharm" });
    })
})

router.get('/getpharm/:id', async function(request, response, next) {
    var id = request.params.id;
    var data = {};

    data.pharm = await Pharmacy.findById(id).then((res) => {
        if (!res) {
            data.message = "Pharm Not found";
            return null
        } else {
            response.status(200).json(res);
        }
    }).catch((err) => {
        console.log(err);
        response.status(400).json({ message: "Pharm Not found" });
    })
})

router.delete('/deletepharm/:id/:token', async function(request, response, next) {
    var id = request.params.id;
    var token = request.params.token;
    var users = await User.find();

    var obj = User.verifyOfUser(users, token);
    if (obj.isModerator) {

        await Pharmacy.findByIdAndDelete(id).then((res) => {
                response.status(200).json({ message: "Pharm deleted!" });
            })
            .catch((err) => {
                console.log(err);
                response.status(400).json({ message: "Error in delete Pharm" });
            })
    } else {
        console.log(obj)
        response.status(400).json({ message: "This is not Moderator" });
    }
})

router.patch('/updatepharm/:id/:token', multer({ storage: storage }).single('image'), async function(request, response, next) {
    var id = request.params.id;
    var body = request.body;

    body.logo = request.file.filename;

    var token = request.params.token;
    var users = await User.find();

    var obj = User.verifyOfUser(users, token);
    if (obj.isModerator) {

        await Pharmacy.findByIdAndUpdate(id, { $set: body }, { new: true }).then((res) => {
            if (res) {
                response.status(200).json({ message: "Pharm Update Successfully" });
            } else {
                response.status(400).json({ message: "Error in Update Pharm" })
            }
        }).catch(err => {
            console.log(err);
            response.status(400).json({ message: "This is Not Moderator" });
        })
    }
})

router.patch('/updaterate/:id', async function(request, response) {
    var id = request.params.id;
    var rate = request.body;
    console.log("EEE");
    console.log(rate);
    let body = {};
    var newRate;
    Pharmacy.findById(id).then(res => {
        newRate = res.rate - rate.rate;
        body.rate = newRate;
        Pharmacy.findByIdAndUpdate(id, { $set: body }, { new: true }).then(res => {

            if (res) {
                response.status(200).json({ message: "Status: Success" })
            } else {
                response.status(400).json({ message: "Error in status" })
            }
        }).catch(err => {
            console.log(err);
            response.status(400).json(err);
        })
    })
})


router.post('/search', async(request, response) => {
    var body = request.body;
    console.log("Body ");
    console.log(body);

    var thisname = body.name;
    console.log(thisname)

    await Pharmacy.find({ "name": thisname }).then(all => {
        response.status(200).json(all);
    }).catch(err => {
        response.status(400).json({ message: "Error in search Phram" })
    })
})

// router.post('/search', async function( request, response) {
//     console.log(request.body);

// } )

module.exports = router;
