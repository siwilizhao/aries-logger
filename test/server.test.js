const Server = require('../index').server
const options = {
    server_port: 9527,
    server_host: '127.0.0.1',
    redis_port: 6379,
    redis_host: '192.168.10.10',
    log_list_queue: 'ARIES_LOG_LIST'
}
describe('server', () => {
    it('start server', async () => {
        const server = new Server(options)
    });
});