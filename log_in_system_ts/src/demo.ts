const start = async () => {
    const string = await Promise.resolve<string>('Hello world')
    console.log(string)

    try {
        const number = await Promise.reject<string>('This is not a number')
    } catch (e) {
        console.log(e)
    }
}

start()
