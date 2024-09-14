function chat_handler(params, player, des){
    console.log(`>> ${player.profile.name} sent message ${params.message}`)
}

module.exports = chat_handler;