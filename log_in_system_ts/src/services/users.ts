import * as fs from 'fs'
import * as path from 'path'
import { v4 } from 'uuid'
import 'colors.ts'
import * as users from '../users.json'
import { writeFile } from '../setup/fs_setup'

export const writeUserInDb = async (props: { email: string; password: string; birthDate: string }) => {
    const user: any = {
        id: v4(),
        email: props.email,
        password: props.password,
        createdOn: Date.now(),
        birthDate: props.birthDate,
    }

    const writeFileCallback = (err) => {
        if (err) console.log('Writing your data failed.'.error)
        console.log('Your data was successfully added to DB.'.green)
    }

    users.push(user)
    fs.writeFile(path.resolve(__dirname, '../', 'users.json'), JSON.stringify(users, null, 2), writeFileCallback)
    return await writeFile(
        path.resolve(__dirname, '../', 'users.json'),
        JSON.stringify(users, null, 2),
        'Writing user in DB failed.'.red
    )
}

export const getAllUser = () => {
    return users
}

export const deleteUserByEmailFromDb = async (email: string) => {
    const updatedUsers = users.filter((user) => email !== user.email)

    return await writeFile(
        path.resolve(__dirname, '../', 'users.json'),
        JSON.stringify(updatedUsers, null, 2),
        `${'Deleting user with the email'.red} ${email.white} ${'failed'.red}`
    )
}

export const getUserByEmail = (email: string) => {
    return users.filter((user) => user.email === email)[0]
}
