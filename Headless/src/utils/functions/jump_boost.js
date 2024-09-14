function jump_boost(player, event, run, amplifier){
    player.queue('mob_effect', {
       runtime_entity_id: run,
       event_id: event,
       effect_id: 8,
       amplifier: amplifier,
       particles: false,
       duration: 1000000000,
       tick: 0
    })
 }
 
 module.exports = jump_boost;