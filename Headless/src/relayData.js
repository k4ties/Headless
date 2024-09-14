const config = require('./config/default.json'),
      { Titles } = require('prismarine-auth');

const relayParams = {
    version: config.proxy.version,
    host: '0.0.0.0', // local
    offline: config.proxy.xboxDisabled,
    port: config.proxy.port,
    maxPlayers: config.proxy.maxPlayers,
      destination: {
         host: config.server.ip,
         port: config.server.port
      },
    motd: {
        motd: config.proxy.motd.field,
        levelName: config.proxy.worldName
    },
    authTitle: Titles.MinecraftNintendoSwitch,
    flow: 'live'
}

module.exports = relayParams;