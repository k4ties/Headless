const request_modal = require('../functions/modal/request_modal'),
      help_data = require('../functions/modal/data/help_data'),
      variables = require('../variables/local_data.json')

function command_handler(params, player, des){
  if(params.command.startsWith('/hdl')){
     des.canceled = true;
     request_modal(player, help_data, 1000001)
  }
}

module.exports = command_handler;