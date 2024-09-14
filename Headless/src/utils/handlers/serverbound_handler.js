let command_handler = require('./command_handler'),
    chat_handler = require('./chat_handler'),
    modal_res_handler = require('./modal_res_handler'),
    variables = require('../variables/local_data.json');

function serverbound_handler(params, des, name){
   if(name === 'player_auth_input'){ // update variables
      variables.player_vec3.x = params.position.x
      variables.player_vec3.y = params.position.y
      variables.player_vec3.z = params.position.z
   }
   if(name === 'modal_form_response'){
      modal_res_handler(params, player, des)
   }
   if(name === 'command_request'){
      command_handler(params, player, des)
   }
   if(name === 'text'){
      chat_handler(params, player, des)
   }
}

module.exports = serverbound_handler;