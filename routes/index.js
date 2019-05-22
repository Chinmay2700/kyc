var express = require('express'); 
var mongo=require('mongodb')
var router = express();
var formidable = require('formidable')
//var formidable = require('formidable');
var fs = require('fs');
console.log("Server started at port no. 3000");
var upload=require('express-fileupload');
router.use(upload());
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
var select;
router.post('/upload', function(req,res) {
    select=req.body.selectpicker;
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
    //console.log(req.body.front)
    //console.log(req.files.front);
    var db=req.db;
    var id=req.body.id;
    var image1=req.files;
    if(select==0)
    {
        var image2=req.files;
        var aadhar_coll = db.get('aadhar_coll');
        aadhar_coll.insert({"_id":new mongo.ObjectID(id), "id":id, "front_img":image1, "back_img":image2}, function(err,doc){
            if(err)
                res.send("Id already exist!");
            else
                res.render("video");
        });
    }
    else if(select==1)
    {
        var pan_coll = db.get('pan_coll');
        pan_coll.insert({"_id":new mongo.ObjectID(id), "id":id, "front_img":image1}, function(err,doc){
            if(err)
                res.send("Id already exist!");
            else
                res.render("video");
        });
    }
    else if(select==2)
    {
        var dl_coll = db.get('dl_coll');
        dl_coll.insert({"_id":new mongo.ObjectID(id), "id":id, "front_img":image1}, function(err,doc){
            if(err)
                res.send("Id already exist!");
            else
                res.render("video");
        });
    }
    else if(select==3)
    {
        var passport_coll = db.get('passport_coll');
        passport_coll.insert({"_id":new mongo.ObjectID(id), "id":id, "front_img":image1}, function(err,doc){
            if(err)
                res.send("Id already exist!");
            else
                res.render("video");
        });
    }
});
router.get('/userlist',function(req,res){
    var db=req.db;
    var collection=db.get('aadhar_coll');
    collection.find({},{},function(err,doc){
        if(err)
            res.send("There was a problem accesiing the data");
        else
        {
            res.render("userlist",{"userlist":doc});
            console.log("database successfully accessed!");
        }
    });
});
module.exports = router;