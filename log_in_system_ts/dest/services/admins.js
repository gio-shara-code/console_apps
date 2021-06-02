import * as admins from '../admins.json';
export const getUserByEmail = (email) => {
    return admins.filter((user) => user.email === email)[0];
};
//# sourceMappingURL=admins.js.map