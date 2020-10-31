const express = require('express');
const app = express();

const usersController = require('./API/controllers/usersController');

app.use(express.json());
app.use(express.urlencoded({extended: true}));



//get - users
//required: id
//optional: none

app.get('/api/users/:id', (req, res)=> {
    console.log(req.params.id);
    res.status(200).json({
        success: true,
        user: users[req.params.id]
    });
});

//delete - users
//required: id
app.delete('/api/users/:id', (req, res)=> {
    //console.log(req.params.id);
    const id=typeof(req.body.id)==='number' ? req.body.id: false;
    if(id||id===0){
        users.splice(id, 1);
        res.status(200).json({
            success: true,
            user: users[id]
        });
    };
    res.status(200).json({
        success: true,
        //user: users[req.params.id]
    });
});

//Post - users
//required: firstName, lastName, email, password
//optional: none

app.post('/api/users/', (req, res) => {
    console.log(req.body);
    res.status(201).json({
        success: true
    });
});

app.get('/api/ping', (req, res) =>{
    res.status(200).json({
        success: true
    });
});

//get - users
//Required: none
//Optional: none

app.get('/api/users', usersController.read);





app.listen(3000, () => {
    console.log('server running');
});

