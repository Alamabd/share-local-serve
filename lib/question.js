const figures = require("figures")
const readline =require('readline')
const select = require("../utils/select")
const chalk = require("chalk")

function portQuestion() {
    return new Promise( async (resolve) => {
        console.log("select port server?")
        const port = await select([8000, 5000, 3000, "custom"])
        console.log("port   : " + port + " " + chalk.greenBright(figures.tick))

        if(port === 'custom') {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            })
            rl.question("Port custom? ", answer => {
                rl.close()
                resolve(answer)
            })
        } else {
            resolve(port)
        }
    })
}

function serverQuestion () {
    return new Promise( async resolve => {
        console.log("select server environment?")
        const env = await select(['php', 'nodejs'])
        console.log("server : " + env + " " + chalk.greenBright(figures.tick))
        resolve(env)
    })
}

module.exports = {portQuestion, serverQuestion}