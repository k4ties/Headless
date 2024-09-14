const ip = require('ip'),
      config = require('../config/default.json'),
      relayParams = require('../relayData'),
      connect_event = require('../player/connect_event');

function startProxy(Relay){
    const relay = new Relay(relayParams);
    relay.on('connect', player => connect_event(player) );
    relay.listen(console.log(`> Server is listening on ${ip.address()} : ${config.proxy.port} (${config.proxy.version})`));
}

module.exports = { startProxy }
