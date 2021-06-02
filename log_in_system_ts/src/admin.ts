import { AdminActivity } from './enums'
import 'colors.ts'
import { printAdminOptions } from './utils/console_print'
import { getAdminByEmail } from './services/admins'
import { showAllUsers, deleteUserByEmail } from './activities/admin'
import { readAdminActivityOption } from './utils/read_options'

export const admin = async () => {
    console.log('****** Admin *******'.italic)
    // const email = await readEmail()
    const email = 'gio@gio.com'
    // const password = await readPassword()
    const password = 'admin'
    const user = await getAdminByEmail(email)
    if (!user) return console.log(`${'The user with the email'.red} ${email.italic} ${"doesn't exists".red}`)

    if (password !== user.password) return console.log(`Wrong password`.red)
    console.log(`\nYou have been successsfully logged in!`.green)
    console.log(`\nWhat would you like to do`.italic)
    printAdminOptions()
    const option = await readAdminActivityOption()
    switch (option) {
        case AdminActivity.showAllUsers:
            showAllUsers()
            break
        case AdminActivity.deleteUserByEmail:
            deleteUserByEmail()
            break
        default:
            return console.log('\nOption is invalid.\n'.red)
    }
}
