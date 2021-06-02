import * as fs from 'fs'
import * as path from 'path'
import { v4 } from 'uuid'
import 'colors.ts'
import * as users from '../users.json'
export const writeUserInDb = (props) => {
    const user = {
        id: v4(),
        email: props.email,
        password: props.password,
        createdOn: Date.now(),
        birthDate: '',
    }
    const writeFileCallback = (err) => {
        if (err) console.log('Writing your data failed.'.error)
        console.log('Your data was successfully added to DB.'.green)
    }
    users.push(user)
    fs.writeFile(path.resolve(__dirname, '../', 'users.json'), JSON.stringify(users, null, 2), writeFileCallback)
}
//# sourceMappingURL=users.js.map
