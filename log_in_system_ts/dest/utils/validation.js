import { Input } from '../enums.js';
export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ((email === null || email === void 0 ? void 0 : email.trim().length) === 0) {
        return 'Email is empty';
    }
    else if (!re.test(String(email).toLowerCase())) {
        return 'Email format not valid';
    }
    return Input.valid;
};
export const validatePassword = (password) => {
    if ((password === null || password === void 0 ? void 0 : password.trim().length) === 0) {
        return 'password is empty';
    }
    else if (password.length < 3 || password.length > 10) {
        return 'Password not valid. Min. 3 and Max. 10';
    }
    return Input.valid;
};
//# sourceMappingURL=validation.js.map