import { AdminActivity, NormalUserLoginOption, UserActivity, UserType } from '../enums'
import { input } from '../setup/terminal_input_setup'

export const readUserTypeOption = async (): Promise<number> => {
    const option = await input('Option: '.yellow)
    const optionNumber = parseInt(option)

    switch (optionNumber) {
        case 1:
            return UserType.admin
        case 2:
            return UserType.normal
        case 3:
            return UserType.anonymous
        default:
            return
    }
}

export const readAdminActivityOption = async (): Promise<AdminActivity> => {
    const option = await input('Option: '.yellow)
    const optionNumber = parseInt(option)

    switch (optionNumber) {
        case 1:
            return AdminActivity.showAllUsers
        case 2:
            return AdminActivity.deleteUserByEmail
        default:
            return
    }
}

export const readUserLoginOption = async (): Promise<NormalUserLoginOption> => {
    const option = await input('Option: '.yellow)
    const optionNumber = parseInt(option)

    switch (optionNumber) {
        case 1:
            return NormalUserLoginOption.login
        case 2:
            return NormalUserLoginOption.register
        case 3:
            return NormalUserLoginOption.resetPassword
        default:
            return
    }
}

export const readUserActivities = async () => {
    const option = await input('Option: '.yellow)
    const optionNumber = parseInt(option)

    switch (optionNumber) {
        case 1:
            return UserActivity.showDashboard
        case 2:
            return UserActivity.showProfile
        default:
            return
    }
}
