const start_data_handler = require('../utils/handlers/start_data_handler'),
      serverbound_handler = require('../utils/handlers/serverbound_handler'),
      close_handler = require('../utils/handlers/close_handler')

function connect_event(player){
    console.log(`>> Player connected to internal server`)
    player.on('clientbound', ({name, params}, des) => start_data_handler(name,params,des))
    player.on('serverbound', ({name, params}, des) => serverbound_handler(params,des,name))
    player.on('close', () => { close_handler() })
}

module.exports = connect_event;