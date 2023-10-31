const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
const port = 3000;
app.use(cors());
// Parse JSON in request body
app.use(bodyParser.json());

app.get('/login', (req, res) => {
    
    const { userName, password } = req.body;
    console.log('userName , password: ', userName , password);
    if(userName == 12345 && password == 12345)
    res.send({loginSuccess: true, message : "Login Successfull !"});
    else 
    res.send({loginSuccess: false, message : "Login Unsuccessfull !"});

  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
