const Client = require('../index').client
const options = {
    project: 'test-client',
    port: 9528,
    server_port: 9527,
    server_host: '127.0.0.1'
}
const logger = new Client(options)
describe('cleint', () => {
    it('info', async () => {
        for (let i = 0; i < 10; i++) {
            await logger.info('你好啊')
        }
    });
});