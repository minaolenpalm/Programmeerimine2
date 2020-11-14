usersService = {};

module.exports=usersService;

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
        password: '$2b$10$9TTC50HTsTxXukOnsONDF.FwBc80pGWiFfZgVRFvp3/FWbHNgP6g6'
    }
];

usersService.read = () => {
    return users;
};

usersService.readByID = (userId) => {
    return users[userId];
};

usersService.readByEmail = (email) => {
    const user = users.find(user => user.email === email);

    return user;
}

//create user
usersService.create = async (user) => {
    user.id=users.length;
    user.password=await hashService.hash(user.password);
    users.push(user);
    const userToReturn = { ... user};
    //delete userToReturn.password;
    return userToReturn;
};

usersService.update = (user) => {
        // Check if optional data exists
        if (user.firstName) {
            // Change user data in 'database'
            users[user.id].firstName = user.firstName;
        }
        // Check if optional data exists
        if (user.lastName) {
            // Change user data in 'database'
            users[user.id].lastName = user.lastName;
        }
        // Check if optional data exists
        if (user.email) {
            // Change user data in 'database'
            users[user.id].email = user.email;
        }
        // Check if optional data exists
        if (user.password) {
            // Change user data in 'database'
            users[user.id].password = user.password;
        }

        const updatedUser = { ... users[user.id]};
        //delete updatedUser.password;
        return updatedUser;
        // Return updated user data
};

const hashService = require('./hashService');