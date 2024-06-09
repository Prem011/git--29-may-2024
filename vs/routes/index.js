var express = require('express');
var router = express.Router();

const fs=require('fs');
const path=require('path')

const gpath=path.join(__dirname,'../','public','models')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/', function(req, res, next) {
  const files=fs.readdirSync(gpath,'utf-8')
  
  res.render('index',{files:files});
});



router.post('/createfile', function(req, res, next) {
  const{filename}=req.body;
  fs.writeFileSync(path.join(gpath,filename),'' )
  res.redirect('/');
});

module.exports = router;
