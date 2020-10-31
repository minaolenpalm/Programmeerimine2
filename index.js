const express = require('express');
const app = express();

const usersController = require('./API/controllers/usersController');

app.use(express.json());
app.use(express.urlencoded({extended: true}));



//get - users
//required: id
//optional: none



//delete - users
//required: id

//Post - users
//required: firstName, lastName, email, password
//optional: none



app.get('/api/ping', (req, res) =>{
    res.status(200).json({
        success: true
    });
});

//get - users
//Required: none
//Optional: none

app.get('/api/users', usersController.read);
app.get('/api/users/:id', usersController.readById);

app.post('/api/users', usersController.create);

app.delete('/api/users/:id', usersController.kill);

app.put('/api/users', usersController.update);

app.listen(3000, () => {
    console.log('server running');
});

