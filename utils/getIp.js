const { networkInterfaces } = require('os')

function getIp() {
    return new Promise((resolve) => {
        // // Ip address
        const nets = networkInterfaces()
        let ip = ''
        if(nets.wlp3s0) {
            resolve(nets.wlp3s0[0].address)
        } else {
            resolve(null)
        }
    })
}

module.exports = getIp