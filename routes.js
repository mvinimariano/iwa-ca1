module.exports.UPLOAD_PATH = 'uploads';

const   express = require("express"),
router = express.Router(),
app = express(),
imageCtrl = require('./image-controller'),
userCtrl = require("./user-controller"),
multer = require('multer'),
path = require('path');
upload = multer({ dest: module.exports.UPLOAD_PATH });

router.use(express.static(__dirname + '/public/'));

router.get('/',(req,res)=> {
    res.sendFile('index.html',{
        root:path.join(__dirname, './views')
    })
})

router.post('/users', userCtrl.createUser);
router.get('/users', userCtrl.getUsers);
router.get('/users/:id', userCtrl.getUser);
router.put('/users/:id', userCtrl.updateUser);
router.delete('/users/:id', userCtrl.deleteUser);
router.post('/images', upload.single('image'), imageCtrl.uploadImage);
router.get('/images', imageCtrl.getImages);
router.get('/images/:id', imageCtrl.getImage);
router.delete('/images/:id', imageCtrl.deleteImage);


module.exports = router;