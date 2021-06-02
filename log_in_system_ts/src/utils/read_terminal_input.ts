import { utimes } from 'fs'
import { isNumberObject } from 'util/types'
import { Input, UserType, AdminActivity, NormalUserLoginOption } from '../enums'
import { input } from '../setup/terminal_input_setup'
import { validateEmail, validatePassword, validateBirthDate } from './validation'



export const readEmail = async (): Promise<string | undefined> => {
    let emailIsNotValid = true
    let email
    while (emailIsNotValid) {
        const inputEmail = await input('Email: '.yellow)
        const validationResult = validateEmail(inputEmail)
        if (validationResult === Input.valid) {
            email = inputEmail
            emailIsNotValid = false
        } else {
            console.log((validationResult as string).red)
        }
    }
    return email
}

export const readPassword = async (): Promise<string | undefined> => {
    let passwordIsNotValid = true
    let password

    while (passwordIsNotValid) {
        const inputEmail = await input('Password: '.yellow)
        const validationResult = validatePassword(inputEmail)
        if (validationResult === Input.valid) {
            password = inputEmail
            passwordIsNotValid = false
        } else {
            console.log((validationResult as string).red)
        }
    }
    return password
}

export const readUserBirthDate = async () => {
    let passwordIsNotValid = true
    let birthDay
    while (passwordIsNotValid) {
        const birthDate = await input('Birthdate: '.yellow)
        const validationResult = validateBirthDate(birthDate.split('/'))

        if (validationResult === Input.valid) {
            passwordIsNotValid = false
            birthDay = birthDate
        } else {
            console.log(validationResult)
        }
    }
    return birthDay
}

