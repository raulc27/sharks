const express = require('express');
const router = express.Router();
const path = require('path');

router.use(
  function(req,res,next){
    console.log('/'+req.method);
    next();
  }
);

router.get('/',
  function(req,res,next){
    res.sendFile(path.resolve('views/index.html'));
  }
);

modules.exports = router;
