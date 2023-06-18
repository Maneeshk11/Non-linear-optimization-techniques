const { exec } = require('child_process');
const axios = require('axios');
const cors=require("cors");
const fs = require('fs');
const path = require('path');
const base64 = require('base64-js');

const express=require('express');
// const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
// app.use(bodyParser.json());s
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());


app.post('/formData', (req, res) => {
    const dataObj = req.body;
    const funcV = dataObj.functionV;
    const XVar = dataObj.x;
    const YVar = dataObj.y;
    const pythonScript = 'python3 steepestDescent.py "' + funcV + '" ' + XVar + ' ' + YVar;
    exec(pythonScript, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing Python script: ${error.message}`);
          res.sendStatus(500);
          return;
        }
        console.log(stdout);
        const dataArray = stdout.split('\n').map(item => item.trim()).filter(item => item !== '');

        // Create an object with a property called `data` containing the array of data elements
        const data = {
          data: dataArray
        };
        res.json(data);
        // const imagePath = path.join(__dirname, './static/contour_plot.png');

        // fs.readFile(imagePath, (err, data) => {
        //   if (err) {
        //     console.error('Error reading image file:', err);
        //     return res.status(500).send('Internal Server Error');
        //   }
     
        //   // Convert image data to base64-encoded string
        //   const encodedImage = base64.fromByteArray(data);
    
        //   // Return the image data as a JSON response
        //   res.json({ image: encodedImage });
        // });
    
        // Send the response
        // res.sendStatus(200);
      });
});

  


app.listen(5000, () => {console.log('connection was made on 5000')});