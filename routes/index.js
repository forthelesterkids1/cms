var  express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
const fs = require('fs');

// Where fileName is name of the file and response is Node.js Reponse. 
/*responseFile = (fileName, response) => {
  const filePath =  "./bea.json" // or any file format

  // Check if file specified by the filePath exists 
  fs.exists(filePath, function(exists){
      if (exists) {     
        // Content-type is very interesting part that guarantee that
        // Web browser will handle response in an appropriate manner.
        response.writeHead(200, {
          "Content-Type": "application/octet-stream",
          "Content-Disposition": "attachment; filename=" + fileName
        });
        fs.createReadStream(filePath).pipe(response);
      } else {
        response.writeHead(400, {"Content-Type": "text/plain"});
        response.end("ERROR File does not exist");
      }
    });
  }
}
*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
module.exports = router;
