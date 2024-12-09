const figures = require("figures")

function loader(time) {
    const spinner = ['-', '\\', '|', '/']

    let i = 0
    const interval = setInterval(() => {
        process.stdout.write(`\rLoading... ${i !== null ? spinner[i] : figures.tick}`)
        i = (i + 1) % spinner.length
    }, 200)

    setTimeout(() => {
        i = null
        clearInterval(interval)
        console.log()
    }, time)
}

module.exports = loader