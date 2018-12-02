const Client = require('../index').client
const options = {
    project: 'test-client',
    port: '',
    server_port: 9527,
    server_host: '127.0.0.1'
}
const logger = new Client(options)
const logger2 =new Client(options)
console.log(logger === logger2)
describe('cleint', () => {
    it('info', async () => {
        for (let i = 0; i < 10; i++) {
            await logger2.info('你好啊')
        }
        for (let i = 0; i < 10; i++) {
            await logger.info('你好啊')
        }
    });
});