'use strict'

const User = use('App/Models/User')

class AuthController {

    async register({ request })
    {
        const data = request.only(['username', 'email', 'password']);

        try {
            const user = await User.create(data);
        } catch (error) {
            return error;
        }
        

        return user;
    }

    async authenticate({request, auth})
    {
        const { email, password } = request.all();
        
        try {
            const token = await auth.attempt(email, password);
            return token;
        } catch (error) {
            return error
        }
    }
}

module.exports = AuthController
