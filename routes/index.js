var express = require('express');
var router = express.Router();
console.log("Server started at port no. 3000");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/portal', function(req,res) {
    var select=req.body.selectpicker;
    if(select==0)
        res.render("aadhar");
    else if(select==1)
        res.render("pan");
    else if(select==2)
        res.render("drlic");
    else
        res.render("passport");

});
router.post('/addfile',function(req,res){
    res.render("video");
})
module.exports = router;