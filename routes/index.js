var express = require('express');
var router = express.Router();
console.log("Server started at port no. 3000");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/upload', function(req,res) {
    var select=req.body.selectpicker;
    if(select==0)
        res.render("upload",{title: 'Aadhar', hid:false});
    else if(select==1)
        res.render("upload",{title: 'PAN', hid:true});
    else if(select==2)
        res.render("upload",{title: 'Driving License', hid:true});
    else
        res.render("upload",{title: 'Passport', hid:true});

});
router.post('/selfie',function(req,res){
    res.render("video");
});
module.exports = router;