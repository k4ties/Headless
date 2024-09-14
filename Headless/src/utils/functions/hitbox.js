let variables = require('../variables/local_data.json')

function hitbox(player, hor, ver){
      for(i=0; i<=variables.entity_list.length; i++){
          if(variables.entity_list[i] === undefined){
             return;
          }
       else {
          player.queue('set_entity_data', {
             metadata: [
                {
                   key: 'boundingbox_width',
                   type: 'float',
                   value: hor 
                },
                {
                   key: 'boundingbox_height',
                   type: 'float',
                   value: ver 
                }
             ],
             properties: {
                ints: [],
                floats: []
             },
            runtime_entity_id: variables.entity_list[i],
            tick: 0
          })
       }
     }
}

module.exports = hitbox;