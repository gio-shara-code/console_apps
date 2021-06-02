import { parse } from 'path/posix'
import { Input } from '../enums'
export const validateEmail = (email: string): string | Input => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (email?.trim().length === 0) {
        return 'Email is empty'
    } else if (!re.test(String(email).toLowerCase())) {
        return 'Email format not valid'
    }
    return Input.valid
}

export const validatePassword = (password: string): string | Input => {
    if (password?.trim().length === 0) {
        return 'password is empty'
    } else if (password.length < 3 || password.length > 10) {
        return 'Password not valid. Min. 3 and Max. 10'
    }
    return Input.valid
}

export const validateBirthDate = (birthDate: string[]) => {
    const [day, month, year] = birthDate
    const parsedDay = parseInt(day)
    const parsedMonth = parseInt(month)
    const parsedYear = parseInt(year)
    if (!day || !month || !year) return 'Format is not correct'.red
    else if (isNaN(parsedDay) || isNaN(parsedMonth) || isNaN(parsedYear)) return 'Format is not correct'
    else if (
        parsedDay < 1 ||
        parsedDay > 31 ||
        parsedMonth < 1 ||
        parsedMonth > 12 ||
        parsedYear < 1945 ||
        parsedYear > 2021
    )
        return `This birth date doesn't exist`.red

    return Input.valid
}
