import 'colors.ts'

export const printUserTypes = () => {
    console.log('***********************'.magenta)
    console.log('1. Admin'.magenta)
    console.log('2. Normal User'.magenta)
    console.log('3. Anonymous User'.magenta)
    console.log('***********************\n'.magenta)
}

export const printNormalUserOptions = () => {
    console.log('***********************'.magenta)
    console.log('1. Login'.magenta)
    console.log('2. Register'.magenta)
    console.log('3. Reset Password'.magenta)
    console.log('***********************\n'.magenta)
}

export const printAdminOptions = () => {
    console.log('***********************'.magenta)
    console.log('1. Show all users'.magenta)
    console.log('2. Delete user by email'.magenta)
    console.log('***********************\n'.magenta)
}

export const printAllUsersInRow = (users: any[]) => {
    let i = 1
    users.forEach((user) => {
        process.stdout.write(` ${i}: ${(user.email as string).green}  `)
        if (i % 3 === 0) {
            console.log('\n')
        }
        i++
    })
}

export const printUserActivitiesOptions = () => {
    console.log('***********************'.magenta)
    console.log('1. Show dashboard'.magenta)
    console.log('2. Show my profile'.magenta)
    console.log('***********************\n'.magenta)
}

export const printDashboardArticles = () => {
    console.log('****** Articles *******'.italic)
    let i = 1
    ;['Article 1', 'Article 2', 'Article 3'].map((article) => {
        process.stdout.write(` ${i}: ${article.green}  `)
    })

    console.log('\n***********************\n'.italic)
}
export const printUserProfile = (user: any) => {
    console.log('****** Your Profile *******'.italic)
    console.log(`Email: ${user.email}`)
    console.log(`Age: ${user.birthDate}`) //calculate within the user class
    console.log(`Creatd on: ${user.createdOn}`)
    console.log('***************************\n'.italic)
}
