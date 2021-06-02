import * as fs from 'fs'

export const writeFile = (file: string, data: any, errorDesc: string) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, (error) => {
            if (error) {
                console.log(`${errorDesc}: ${error}`)
                reject(false)
            }
            resolve(true)
        })
    })
}