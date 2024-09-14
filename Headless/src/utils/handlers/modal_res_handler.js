const request_modal = require('../functions/modal/request_modal'),
      toast_request = require('../functions/toast_request'),
      fastbreak = require('../functions/fastbreak'),
      fullbright = require('../functions/fullbright'),
      fake_gamemode = require('../functions/fake_gamemode'),
      lowkb = require('../functions/lowkb'),
      jump_boost = require('../functions/jump_boost'),
      hitbox = require('../functions/hitbox'),
      time_change = require('../functions/time_change'),
      trail = require('../functions/trail'),
      spam = require('../functions/spam'),
      fastbreak_data = require("../functions/modal/data/fastbreak_data"),
      fullbright_data = require('../functions/modal/data/fullbright_data'),
      gamemode_faker_data = require('../functions/modal/data/gamemode_faker_data'),
      lowkb_data = require('../functions/modal/data/lowkb_data'),
      jump_boost_data = require('../functions/modal/data/jump_boost_data'),
      hitbox_data = require('../functions/modal/data/hitbox_data'),
      time_changer_data = require('../functions/modal/data/time_changer_data'),
      trail_data = require('../functions/modal/data/trail_data'),
      spam_data = require('../functions/modal/data/spam_data'),
      variables = require('../variables/local_data.json')
      
let hitbox_interval;

function modal_res_handler(params, player, des){
    if(params.form_id === 1000001){
        if(params.has_response_data === true){
           if(params.data === '0\n'){
               request_modal(player, fastbreak_data, 1000002)
           }
           if(params.data === '1\n'){
               request_modal(player, fullbright_data, 1000003)
           }
           if(params.data === '2\n'){
               request_modal(player, gamemode_faker_data, 1000004)
           }
           if(params.data === '3\n'){
               request_modal(player, lowkb_data, 1000005)
           }
           if(params.data === '4\n'){
               request_modal(player, jump_boost_data, 1000006)
           }
           if(params.data === '5\n'){
               request_modal(player, hitbox_data, 1000007)
           }
           if(params.data === '6\n'){
               request_modal(player, time_changer_data, 1000008)
           }
           if(params.data === '7\n'){
               request_modal(player, trail_data, 1000009)
           }
           if(params.data === '8\n'){
               request_modal(player, spam_data, 10000010)
           }
        } else { return; }
    }
    if(params.form_id === 10000010){
        if(params.has_response_data === true){
           if(params.data === `[""]\n`){
              spam(player, null, false)
              toast_request(player, `§l§8>> §7Headless`, `§lSpam turned off`)
              console.log(">> Player turned spam off")
           } else {
              let message = params.data.replace(/[^a-zA-Z ]/g, "")
              spam(player, message.replaceAll(',', ""), true)
              toast_request(player, `§l§8>> §7Headless`, `§lSpam turned on`)
              console.log(">> Player turned spam on")
           }
        } else { return; }
    }
    if(params.form_id === 1000009){
        if(params.has_response_data === true){
            if(params.data === '[null,true]\n'){
                trail(player, true)
                toast_request(player, `§l§8>> §7Headless`, `§lTrail turned on`)
                console.log(">> Player turned trail on")
            } else {
                trail(player, false)
                toast_request(player, `§l§8>> §7Headless`, `§lTrail turned off`)
                console.log(">> Player turned trail off")
            }
        } else { return; }
    }
    if(params.form_id === 1000008){
        if(params.has_response_data === true){
            let value = Number(params.data.replace(/[^\d.-]/g, ''))
            time_change(player, value)
            toast_request(player, `§l§8>> §7Headless`, `§lTTime is now ${Math.floor(value)}`)
            console.log(`>> Player set time to ${Math.floor(value)}`)
        } else { return; }
    }
    if(params.form_id === 1000007){
       if(params.has_response_data === true){
           if(params.data === '["",""]\n'){ return }
           else {
             try {
                let value_arr = params.data.split(','); value_arr[0] = value_arr[0].replace(/[^\d.-]/g, ''); value_arr[1] = value_arr[1].replace(/[^\d.-]/g, '')
                clearInterval(hitbox_interval)
                hitbox_interval = setInterval(() => {
                   hitbox(player, Number(value_arr[0]), Number(value_arr[1]))
                })
                toast_request(player, `§l§8>> §7Headless`, `§lHitbox is now ${value_arr[0]} : ${value_arr[1]}`)
                console.log(`>> Player set hitbox to X: ${value_arr[0]}, Y: ${value_arr[1]}`)
             } catch(err){ console.log(err) }
           }
       } else { return; }
    }   
     if(params.form_id === 1000006){
        if(params.has_response_data === true){
            if(params.data === '[0]\n'){ jump_boost(player, 3, variables.runtime_id, 0)
                toast_request(player, `§l§8>> §7Headless`, `§lJump Boost turned off`)
                console.log('>> Player turned Jump Boost off')
            } else {
                let amplifier = Number(params.data.replace(/[^\d.-]/g, ''))
                jump_boost(player, 3, variables.runtime_id, 0)
                jump_boost(player, 1, variables.runtime_id, amplifier)
                toast_request(player, `§l§8>> §7Headless`, `§lJump Boost turned on`)
                console.log(`>> Player turned Jump Boost * ${amplifier} on`)
            }
        } else { return; }
    }
    if(params.form_id === 1000005){
        if(params.has_response_data === true){
            if(params.data === '[null,true]\n'){
               lowkb(player, 1, variables.runtime_id)
               toast_request(player, `§l§8>> §7Headless`, `§lLow Knockback turned on`)
               console.log(">> Player turned Low Knockback on")
            } else {
               lowkb(player, 3, variables.runtime_id)
               toast_request(player, `§l§8>> §7Headless`, `§lLow Knockback turned off`)
               console.log(">> Player turned Low Knockback off")
            }
        } else { return; }
    }
    if(params.form_id === 1000004){
        if(params.has_response_data === true){
            if(params.data === '[0]\n'){
                fake_gamemode(player, 0)
                toast_request(player, `§l§8>> §7Headless`, `§lGamemode is now Survival`)
                console.log(">> Player faked gamemode to survival")
            }
            if (params.data === '[1]\n') {
                fake_gamemode(player, 2)
                toast_request(player, `§l§8>> §7Headless`, `§lGamemode is now Adventure`)
                console.log(">> Player faked gamemode to adventure")
            }
            if (params.data === '[2]\n') {
                fake_gamemode(player, 1)
                toast_request(player, `§l§8>> §7Headless`, `§lGamemode is now Creative`)
                console.log(">> Player faked gamemode to creative")
            }
            if (params.data === '[3]\n') {
                fake_gamemode(player, 6)
                toast_request(player, `§l§8>> §7Headless`, `§lGamemode is now Spectator`)
                console.log(">> Player faked gamemode to spectator")
            }
        } else { return; }
    }
    if(params.form_id === 1000003){
        if(params.has_response_data === true){
            if(params.data === '[null,true]\n'){
                fullbright(player, 1, variables.runtime_id)
                toast_request(player, `§l§8>> §7Headless`, `§lFullbright turned on`)
                console.log(">> Player turned fullbright on")
            } else {
                fullbright(player, 3, variables.runtime_id)
                toast_request(player, `§l§8>> §7Headless`, `§lFullbright turned off`)
                console.log(">> Player turned fullbright off")
            }
        } else { return; }
    }
    if(params.form_id === 1000002){
        if(params.has_response_data === true){
            if(params.data === '[null,true]\n'){
               fastbreak(player, 1, variables.runtime_id)
               toast_request(player, `§l§8>> §7Headless`, `§lFastbreak turned on`)
               console.log(">> Player turned fastbreak on")
            } else {
               fastbreak(player, 3, variables.runtime_id)
               toast_request(player, `§l§8>> §7Headless`, `§lFastbreak turned off`)
               console.log(">> Player turned fastbreak off")
            }
        } else { return; }
    }
}

module.exports = modal_res_handler;