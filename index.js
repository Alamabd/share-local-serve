#!/usr/bin/env node
const chalk = require('chalk')
const package = require('./package.json')
const run = require('./lib/run')
const view = require('./lib/view')

const args = process.argv.splice(process.execArgv.length + 1)

const log = console.log

switch (args[1]) {
    case undefined:
        log("=====================")
        log("= " + chalk.bold.italic("share local serve") + " =")
        log("=====================")
        log()
        log("share your local server for other device development via wireless network")
        log("- " + chalk.blue("Author  : " + package.author))
        log("- " + chalk.blue("Licence : " + package.license))
        log()
        log("-v ------- version")
        log("-h ------- for help command")
        break
    case "run":
        run()
        break
    case "view":
        view()
        break
    case "-v":
        log(package.version + " (share-local-serve@" + package.version + ")")
        break
    case "-h":
        log("list command:")
        log("run  ------ for running server ")
        log("view ------ for get server running code")
        break
    default:
        log(chalk.red("sls(share-local-serve) : error command"))
        break
}