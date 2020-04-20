'use strict';

var express = require('express');
var cors = require('cors');

// require and use "multer"...
const multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.post('/api/fileanalyse', upload.single('upfile'), function (req, res, next) {
  // req.file is the `upfile` file
  
})

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
