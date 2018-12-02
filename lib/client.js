const dgram = require('dgram')
let instance = null
class Client {
    constructor(options) {
        if (!instance) {
            instance = this
        }
        this.options = options
        this.server = dgram.createSocket('udp4')
        this.server.on('error', error => {
            console.info(`服务器异常：\n${error.stack}`)
            this.server.close()
        })
        this.server.on('message', (msg, rinfo) => {
            console.log(`服务器收到：${msg} 来自 ${rinfo.address}:${rinfo.port}`);
        });
        
        this.server.on('listening', () => {
            const address = this.server.address();
            console.info(`服务器监听 ${address.address}:${address.port}`);
        })
        
        this.server.on('close', () => {
            console.log(`服务关闭`);
        });
        // 修改绑定端口为可选配置
        if (this.options['port']) {
            this.server.bind(this.options['port'])
        }
        return instance
    }

    /**
     * info
     *
     * @param {*} msg
     * @memberof Client
     */
    async info(msg) {
        return new Promise((resolve,reject) => {
            const contents = {
                project: `${this.options['project']}`,
                time: Date.now(),
                msg: msg,
                pid: process.pid,
                ppid: process.ppid,
            }
            this.server.send(Buffer.from(JSON.stringify(contents)), this.options['server_port'],  this.options['server_host'], (err, bytes) => {
                if (err) {
                    console.trace(err)
                    reject(err)
                }
                console.info(`bytes: ${bytes}`)
                resolve(bytes)
            })
        })
        
    }
}
module.exports = Client