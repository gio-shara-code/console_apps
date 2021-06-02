import * as admins from '../admins.json'

export const getAdminByEmail = (email: string) => {
    return admins.filter((user) => user.email === email)[0]
}
