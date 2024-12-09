const chalk = require("chalk")
const { portQuestion, serverQuestion } = require("./question")
const loader = require("../utils/loader")
const getIp = require("../utils/getIp")
const clipboardy = require('clipboardy')
const figures = require("figures")

async function view() {
    const server = await serverQuestion()
    const port = await portQuestion()
    const ip = await getIp()
    if(ip !== null) {
        if(Number.isInteger(Number(port)) && !isNaN(Number(port))) {
            if(server === 'php') {
                const time = 1000
                loader(time)
                setTimeout(() => {
                    console.log(`${figures.arrowRight} Run this command ${chalk.italic.bold(`http://${ip}:${port}`)}`)
                    clipboardy.writeSync(`http://${ip}:${port}`)
                    console.log("Note: The command has been copied, please paste it")
                }, time + 200)
            } else {
                console.log(chalk.red("Feature(nodejs): still in development stage"))
            }
        } else {
            console.log(chalk.red("Error: port integer not string or empty"))
        }
    } else {
        console.log(chalk.red("Error: No found ip address please check connection"))
    }
}


module.exports = view