let interval;

function spam(player, message, bool){
   if(bool === false){
      clearInterval(interval)
   }
   if(bool === true){
    clearInterval(interval)
    interval = setInterval(() => {
      player.upstream.queue('text', {
         filtered_message: '',
         needs_translation: false,
         platform_chat_id: '', 
         source_name: '',
         type: 'chat',
         xuid: player.profile.xuid,
         message: message
      })
    }, 50)
   }
}

module.exports = spam;