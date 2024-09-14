let variables = require('../variables/local_data.json'),
    interval;

function trail(player, bool){
    if(bool === false){ 
        clearInterval(interval)
    }
    if(bool === true){
    interval = setInterval(() => {
      player.queue("level_event", {
         event: 16404,
         position: { 
             x: variables.player_vec3.x, 
             y: variables.player_vec3.y - 1.8,
             z: variables.player_vec3.z
         },
        data: null
      })
    })
  }
}

module.exports = trail;