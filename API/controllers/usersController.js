const usersService = require('../services/usersService');

const usersController = {};

usersController.read = (req, res) => {
    const users =  usersService.read();

    res.status(200).json({
        success: true,
        users: users
    });
};

usersController.readById = (req, res) => {
    const userId = req.params.id;
    const user = usersService.readByID(userId);

    //console.log(req.params.id);
    res.status(200).json({
        success: true,
        user: user
    });
};

usersController.create = async (req, res) => {
    // Check if provided data is expected type (typeof) and has length when whitespace is removed (.trim().length)
    const firstName = typeof(req.body.firstName) === 'string' && req.body.firstName.trim().length > 0 ? req.body.firstName : false;
    const lastName = typeof(req.body.lastName) === 'string' && req.body.lastName.trim().length > 0 ? req.body.lastName : false;
    const email = typeof(req.body.email) === 'string' && req.body.email.trim().length > 0 ? req.body.email : false;
    const password = typeof(req.body.password) === 'string' && req.body.password.trim().length > 2 ? req.body.password : false;

    // Check if required data exists
    if (firstName && lastName && email && password) {
        // Create new json with user data
        const user = {
            firstName,
            lastName,
            email,
            password
        };

        const newUser = await usersService.create(user);
        // Return data
        res.status(201).json({
            success: true,
            user: newUser
        });
    } else {
        // Return error message
        res.status(400).json({
            success: false,
            message: 'Required field(s) missing or invalid'
        });
    }
}



usersController.kill = (req, res)=> {
    // Check if required data exists
    const id = typeof(req.body.id) === 'number' ? req.body.id : false;
    if(id || id === 0) {
        users.splice(id, 1);
        // Return success message
        res.status(200).json({
            success: true
        });
    } else {
        // Return error message
        res.status(400).json({
            success: false,
            message: 'Required field(s) missing or invalid'
        });
    }
};

usersController.update = (req, res) => {
    const id = typeof(req.body.id) === 'number' ? req.body.id : false;

    if(id || id === 0){
        const firstName = typeof(req.body.firstName) === 'string' && req.body.firstName.trim().length > 0 ? req.body.firstName : false;
        const lastName = typeof(req.body.lastName) === 'string' && req.body.lastName.trim().length > 0 ? req.body.lastName : false;
        const email = typeof(req.body.email) === 'string' && req.body.email.trim().length > 0 ? req.body.email : false;
        const password = typeof(req.body.password) === 'string' && req.body.password.trim().length > 3 ? req.body.password : false;
    
        const user = {
            id,
            firstName,
            lastName,
            email,
            password
        };
        const updateUser = usersService.update(user);
        res.status(200).json({
            success: true,
            user: updateUser
        });
    }
    else{
            // Return error message
            res.status(400).json({
                success: false,
                message: 'Required field(s) missing or invalid'
            });
        
    }
};

module.exports = usersController;

