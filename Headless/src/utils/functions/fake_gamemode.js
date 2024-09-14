function fake_gamemode(player, gamemode){
    player.queue('set_player_game_type', {
        gamemode: gamemode
    })
}

module.exports = fake_gamemode;