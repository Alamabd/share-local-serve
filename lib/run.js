const chalk = require("chalk")
const { portQuestion, serverQuestion } = require("./question")
const loader = require("../utils/loader")
const { spawn } = require("child_process")
const getIp = require("../utils/getIp")
const figures = require("figures")

function execPhp(port, ip) {
    console.log(`${figures.arrowRight} Server running in ${chalk.italic.bold(`http://${ip}:${port}`)}`)
    
    const phpServer = spawn('php', ['-S', `${ip}:${port}`])
    phpServer.stdout.on('data', (data) => {
        console.log(`Output: ${data}`)
    })
    
    phpServer.stderr.on('data', (data) => {
        console.error(chalk.blue(`${data}`))
    })

    phpServer.on('close', (code) => {
        console.log(`PHP server exited with code ${code}`)
    })
}


async function run() {
    const server = await serverQuestion()
    const port = await portQuestion()
    const ip = await getIp()
    if(ip !== null) {
        if(Number.isInteger(Number(port)) && !isNaN(Number(port))) {
            if(server === 'php') {
                const time = 1000
                loader(time)
                setTimeout(() => {
                    execPhp(port, ip)
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


module.exports = run