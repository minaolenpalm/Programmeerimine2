const express = require('express');
const app = express();

const usersController = require('./API/controllers/usersController');
const authController = require('./API/controllers/authController');
const logging = (req, res, next) => {
    console.log(new Date(), req.url);
    next();
}

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.post('/api/login',authController.login);

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
