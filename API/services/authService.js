const userService = require('./usersService');
const hashService = require('./hashService');

const authService = {};

authService.login = async (email, password) => {
    //1. küsime massiivist, kas email on olemas
    //2. kui on, küsi parooli jms
    const user = userService.readByEmail(email);
    if(user){
        const match = await hashService.compare(password, user.password);
        return match;
    }
    else{
        return false;
    }
}

module.exports = authService;