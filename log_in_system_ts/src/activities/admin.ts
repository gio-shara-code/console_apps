import { getAdminByEmail } from '../services/admins'
import { getAllUser, deleteUserByEmailFromDb } from '../services/users'
import { printAllUsersInRow } from '../utils/console_print'
import { readEmail } from '../utils/read_terminal_input'

export const showAllUsers = () => {
    const users = getAllUser()
    if (users.length === 0) {
        console.log(`No users available`.white)
    } else {
        printAllUsersInRow(users)
}
}

export const deleteUserByEmail = async () => {
    const email = await readEmail()
    const user = await getAdminByEmail(email)
    if (!user) return console.log(`${'The user with the email'.red} ${email} ${"doesn't exist".red}`)
    const result = deleteUserByEmailFromDb(user.email)
    if (result) {
        console.log(`${'The user with the email'.green} ${email.white} ${'was successfully deleted!'.green}`)
    }
}
