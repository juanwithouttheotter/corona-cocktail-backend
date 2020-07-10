const userModel = require('../models/user-model');

class User {
    constructor(user_obj) {
        this._user = user_obj;
    }

    get id() {
        return this._user.id;
    }

    get first_name() {
        return this._user.first_name;
    }
    set first_name(first_name) {
        this._user.first_name = first_name;
    }

    get last_name() {
        return this._user.last_name;
    }
    set last_name(last_name) {
        this._user.last_name = last_name;
    }

    get password() {
        return this._user.password;
    }
    getLiteral() {
        return this._user;
    }

    async getUserById(id) {
        this._user = await userModel.selectById(id);
    }


}

module.exports = User;