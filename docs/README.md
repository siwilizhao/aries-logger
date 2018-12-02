# aries-logger

## install

### use yarn 

```js
yarn add aries-logger
```

### use npm

```js
npm i aries-logger
```

## client && server

![An image](@images/aries-logger.png)

## client
```js
const Client = require('aries-logger').client
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
```
### options

* project: project name
* port: client UDP bind port,
* server_port: server UDP bind port,
* server_host:  server UDP host


## server

```js
const Server = require('aries-logger').server
const options = {
    server_port: 9527,
    server_host: '127.0.0.1',
    redis_port: 6379,
    redis_host: '192.168.10.10',
    redis_password: '',
    log_list_queue: 'ARIES_LOG_LIST'
}
describe('server', () => {
    it('start server', async () => {
        const server = new Server(options)
    });
});
```

### options

* server_port: server UDP bind port,
* server_host:  server UDP host
* redis_port: redis port
* redis_host: redis host
* log_list_queue: log quene

## use in aries-services

TODO

