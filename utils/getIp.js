const { networkInterfaces, platform } = require('os')

function getIp() {
    return new Promise((resolve, reject) => {
        if(platform() === "linux") {
            // // Ip address
            const nets = networkInterfaces()
            let ip = ""
            if(nets.wlp3s0) {
                resolve(nets.wlp3s0[0].address)
            } else {
                reject("Error(linux): No found ip address please check connection")
            }
        } else {
            reject(`Error(platform): ${platform()} is not support or development`)
        }
    })
}

module.exports = getIp