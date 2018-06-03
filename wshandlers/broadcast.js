module.exports = function (CONNS) {
    
    return function (message) {
        
        for (var key in CONNS[this.room.title]) {
            CONNS[this.room.title][key].send(
                JSON.stringify({ name: this.user.name, message })
            )
        }
    }
}