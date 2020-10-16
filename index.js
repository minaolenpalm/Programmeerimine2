const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const users = [
    {
        id: 0,
        firstName: 'Kiki',
        lastName: 'Miki',
        email: 'miki@kiki.ee',
        password: 'lammas'
    },
    {
        id: 1,
        firstName: 'Muki',
        lastName: 'Suki',
        email: 'muki@suki.ee',
        password: 'koer'
    }
];

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

app.get('/api/users', (req, res)=> {
    res.status(200).json({
        success: true,
        users: users
    });
});





app.listen(3000, () => {
    console.log('server running');
});

