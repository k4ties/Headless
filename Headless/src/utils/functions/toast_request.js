function toast_request(player, title, message){
    player.queue('toast_request', {
        title: title,
        message: message
    })
}

module.exports = toast_request;