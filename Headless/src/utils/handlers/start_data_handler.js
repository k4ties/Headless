let variables = require('../variables/local_data.json')

function start_data_handler(name, params, des){
    if(name === 'start_game'){
       variables.runtime_id = params.runtime_entity_id;
       console.log(`>> Player spawned with entity id ${params.runtime_entity_id}`)
    }
    if(name === 'add_player'){
        variables.entity_list.push(params.runtime_id)
    }
    if(name === 'transfer'){
        console.log(`>> Player transfered to ${params.server_address} : ${params.port}`)
    }
}

module.exports = start_data_handler;