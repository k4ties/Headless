let interval;

function time_change(player, value){
    clearInterval(interval)
    interval = setInterval(() => {
        player.queue('set_time', {
           time: value
        })
    })
}

module.exports = time_change;