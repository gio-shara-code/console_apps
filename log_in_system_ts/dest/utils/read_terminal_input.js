import { Input, UserType } from '../enums.js';
import { input } from '../setup/terminal_input_setup.js';
import { validateEmail, validatePassword } from './validation.js';
export const readOption = async () => {
    const option = await input('Option: '.yellow);
    const optionNumber = parseInt(option);
    switch (optionNumber) {
        case 1:
            return UserType.admin;
        case 2:
            return UserType.normal;
        case 3:
            return UserType.anonymous;
        default:
            return;
    }
};
export const readEmail = async () => {
    let emailIsNotValid = true;
    let email;
    while (emailIsNotValid) {
        const inputEmail = await input('Email: '.yellow);
        const validationResult = validateEmail(inputEmail);
        if (validationResult === Input.valid) {
            email = inputEmail;
            emailIsNotValid = false;
        }
        else {
            console.log(validationResult.red);
        }
    }
    return email;
};
export const readPassword = async () => {
    let passwordIsNotValid = true;
    let password;
    while (passwordIsNotValid) {
        const inputEmail = await input('Password: '.yellow);
        const validationResult = validatePassword(inputEmail);
        if (validationResult === Input.valid) {
            password = inputEmail;
            passwordIsNotValid = false;
        }
        else {
            console.log(validationResult.red);
        }
    }
    return password;
};
//# sourceMappingURL=read_terminal_input.js.map