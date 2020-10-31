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

const usersController = {};

usersController.read = (req, res)=> {
    res.status(200).json({
        success: true,
        users: users
    });
};

module.exports = usersController;
