const chalk = require("chalk")
const cliSelect = require("cli-select")

function select(values) {
    return new Promise((resolve, reject) => {
        cliSelect({
            values: values,
            valueRenderer: (value, selected) => {
                return selected ? chalk.blueBright(value) : value
            }
        }).then((selected) => {
            if (selected.id !== null) {
                resolve(selected.value)
            } else {
                resolve(null)
            }
        }).catch((error) => {
            reject(error)
        })
    })
}

module.exports = select