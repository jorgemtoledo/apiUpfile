const User = require('../models/User');

module.exports = {
    async create(req, res) {
        // return res.json({ message: 'Hello' });
        // const email = req.body.email;
        const { email } = req.body;

        // const user = await User.create({
        //     email
        // });

        let user = await User.find({ email });

        if (!user) {
            user = await User.create({ email });
        }

        return res.json(user);

    }

}