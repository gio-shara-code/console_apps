import { NormalUserLoginOption, UserActivity } from './enums'
import {
    printNormalUserOptions,
    printUserActivitiesOptions,
    printDashboardArticles,
    printUserProfile,
} from './utils/console_print'
import { readEmail, readPassword, readUserBirthDate } from './utils/read_terminal_input'
import { readUserLoginOption, readUserActivities, readUserTypeOption } from './utils/read_options'
import { writeUserInDb, getUserByEmail } from './services/users'

const login = async () => {
    console.log('\n****** Login *******'.italic)
    let isEmailNotExists = true
    let user
    while (isEmailNotExists) {
        const readedEmail = await readEmail()
        const result = await getUserByEmail(readedEmail)
        if (result) {
            user = result
            isEmailNotExists = false
        } else {
            console.log(`User with the email ${readedEmail} doesn't exist, please try again.`.red)
        }
    }

    let passwordIsWrong = true
    let tries = 3
    while (passwordIsWrong) {
        const password = await readPassword()
        if (user.password !== password) {
            tries--
            if (tries === 0) return console.log(`You only had 3 tries.  Run the program again :>).`.red)
            console.log(`Password is wrong. ${tries} tries left.`.red)
        } else {
            passwordIsWrong = false
        }
    }
    console.log(`Welcome ${user.email}, what do you want to do`.green)

    // let user = {
    //     id: '549424b8-6880-447f-a57d-4053e046611a',
    //     email: 'giorgi@gmail.cc',
    //     password: '1998',
    //     createdOn: 1622305699591,
    //     birthDate: '05/11/1998',
    // }
    console.log('\n****** You are logged in *******'.italic)
    printUserActivitiesOptions()
    const activityOption = await readUserActivities()
    switch (activityOption) {
        case UserActivity.showDashboard:
            printDashboardArticles()
            break
        case UserActivity.showProfile:
            printUserProfile(user)
            break
        default:
            return console.log(`Invalid Option`.red)
    }
}

const register = async () => {
    console.log('\n****** Register *******'.italic)
    const birthDate = await readUserBirthDate()

    let isEmailNotExists = true
    let email
    while (isEmailNotExists) {
        const readedEmail = await readEmail()
        const user = await getUserByEmail(readedEmail)
        if (!user) {
            email = readedEmail
            isEmailNotExists = false
        } else {
            console.log(`User with the email ${readedEmail} already exists, please try again.`.red)
        }
    }

    const password = await readPassword()
    writeUserInDb({ email, birthDate, password: password })
}

const resetPassword = () => {}

export const normalUser = async () => {
    console.log('****** Normal user *******'.italic)
    printNormalUserOptions()
    // const option = await readNormalUserLoginOption()
    const option = NormalUserLoginOption.login as any
    switch (option) {
        case NormalUserLoginOption.login:
            login()
            break
        case NormalUserLoginOption.register:
            register()
            break
        case NormalUserLoginOption.resetPassword:
            resetPassword()
            break
        default:
            console.log('Invalid option'.red)
    }
}
