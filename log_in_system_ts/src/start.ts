import { UserType } from './enums'
import 'colors.ts'
import { printUserTypes } from './utils/console_print'
import { admin } from './admin'
import { normalUser } from './normal_user'

const anonymousUser = () => {}

const start = async () => {
    console.log('****** Welcome *******'.italic)
    printUserTypes()
    // const option = await readOption();
    const option = UserType.normal as any
    switch (option) {
        case UserType.admin:
            admin()
            break
        case UserType.normal:
            normalUser()
            break
        case UserType.anonymous:
            anonymousUser()
            break
        default:
            console.log('\nOption is invalid.\n'.red)
            break
    }
}

start()
