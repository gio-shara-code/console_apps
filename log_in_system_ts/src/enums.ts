export enum UserType {
    admin = 1,
    normal = 2,
    anonymous = 3,
}

export enum AdminActivity {
    showAllUsers,
    deleteUserByEmail,
}

export enum NormalUserLoginOption {
    login,
    register,
    resetPassword,
}

export enum Input {
    valid,
    notValid,
}

export enum UserActivity {
    showDashboard,
    showProfile,
}
