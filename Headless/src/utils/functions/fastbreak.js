function fastbreak(player, event, run){
   player.queue('mob_effect', {
      runtime_entity_id: run,
      event_id: event,
      effect_id: 3,
      amplifier: 255,
      particles: false,
      duration: 1000000000,
      tick: 0
   })
}

module.exports = fastbreak;