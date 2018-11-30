const Redis = require('ioredis')
const dgram = require('dgram')
class Server {
    constructor(options) {
        this.options = options
        this.redis = new Redis(this.options['redis_port'], this.options['redis_host'])
        this.server = dgram.createSocket('udp4')
        this.server.on('error', error => {
            console.info(`服务器异常：\n${error.stack}`)
            this.server.close()
        })
        
        this.server.on('message', async (msg, rinfo) => {
            console.log(`服务器收到：${msg} 来自 ${rinfo.address}:${rinfo.port}`);
            await this.redis.lpush(this.options['log_list_queue'], JSON.stringify({contents: JSON.parse(msg.toString()),rinfo: rinfo, time: Date.now()}))
        });
        
        this.server.on('listening', () => {
            const address = this.server.address();
            console.info(`服务器监听 ${address.address}:${address.port}`);
        })
        
        this.server.on('close', () => {
            console.log(`服务关闭`);
        });
        this.server.bind(this.options['server_port'])
        return this
    }
}
module.exports = Server