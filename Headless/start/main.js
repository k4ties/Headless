const { Relay } = require('bedrock-protocol'),
      { startProxy } = require('../src/utils/manage')

let start = (async () => { 
    new Promise(async (res, rej) => {
        await res(startProxy(Relay))
    })
})

start().then(res => {
    console.log(`> Server started successfully`)
}).catch(err => {
    console.log(`> ${err}`)
})

