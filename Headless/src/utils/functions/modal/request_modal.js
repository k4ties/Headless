function request_modal(player, data, id){
    player.queue('modal_form_request', {
        form_id: id,
        data: data
    })
}

module.exports = request_modal;