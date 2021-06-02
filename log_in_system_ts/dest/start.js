import { UserType } from './enums.js';
import 'colors.ts';
import { printUserTypes, printNormalUserOption } from './utils/console_print.js';
import { readEmail, readPassword } from './utils/read_terminal_input.js';
import { getUserByEmail } from './services/admins.js';
const admin = async () => {
    console.log('****** Admin *******'.italic);
    const email = await readEmail();
    const password = await readPassword();
    const user = await getUserByEmail(email);
    if (!user) {
        console.log(`The user with the email ${email.italic} doesn't exists`.red);
    }
    else {
        if (password !== user.password) {
            console.log(`Password is wrong.`);
        }
    }
};
const normalUser = () => {
    console.log('****** Normal user *******'.italic);
    printNormalUserOption();
};
const anonymousUser = () => { };
const start = async () => {
    console.log('****** Welcome *******'.italic);
    printUserTypes();
    const option = UserType.admin;
    switch (option) {
        case UserType.admin:
            admin();
            break;
        case UserType.anonymous:
            normalUser();
            break;
        case UserType.normal:
            anonymousUser();
            break;
        default:
            console.log('\nOption is invalid.\n'.red);
            break;
    }
};
start();
//# sourceMappingURL=start.js.map