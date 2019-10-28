const express = require('express')
const router = express.Router();
const multer = require('multer');

const Retsept = require('../models/retsept');

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
        cb(error, "backend/recipe");
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const ext = MIME_TYPE_MAP[file.mimetype];
        cb(null, name + '-' + Date.now() + '.' + ext);
    }
})

router.post('/create', multer({ storage: storage }).single('image'), async(request, response, next) => {
    var body = request.body;

    const file = request.file;

    var retsept = {
        number: body.number,
        logo: file.filename,
        status: false
    }
    var retsep = new Retsept(retsept);

    retsep.save().then(res => {
        response.status(200).json(res);
    }).catch(err => {
        console.log(err);
        response.status(400).json({ message: "Error in Saved Retsept" })
    })
})

router.get('/get', async(request, response) => {
    await Retsept.find({ status: false }).then(res => {
        response.status(200).json(res)
    }).catch(err => {
        response.status(400).json(err)
    })
})

router.get('/getTrue', async(request, response) => {
    await Retsept.find({ status: true }).then(res => {
        response.status(200).json(res)
    }).catch(err => {
        response.status(400).json(err)
    })
})


router.get('/getOne/:id', async(request, response) => {
    var id = request.params.id;
    await Retsept.findById(id).then(res => {
        response.status(200).json(res)
    }).catch(err => {
        response.status(400).json(err)
    })
})

router.delete('/:id', async(request, response) => {
    var id = request.params.id;
    await Retsept.findByIdAndDelete(id).then(res => {
        response.status(200).json(res)
    }).catch(err => {
        response.status(400).json(err)
    })
})

router.patch('/:id', async function(request, response) {
    var id = request.params.id;
    let body = {};
    Retsept.findById(id).then(res => {
        body = res;
        body.status = true;
        Retsept.findByIdAndUpdate(id, { $set: body }, { new: true }).then(res => {

            if (res) {
                response.status(200).json({ message: "Status: True" })
            } else {
                response.status(400).json({ message: "Error in status" })
            }
        }).catch(err => {
            console.log(err);
            response.status(400).json(err);
        })
    })
})


module.exports = router;