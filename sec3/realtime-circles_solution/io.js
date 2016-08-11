var io = require('socket.io')();
var players = {};




io.on('connection', function (socket) {
  // google magic strings in socket.io
  socket.on('register-player', function (data) {
        // assigning true is arbitrary
        // we just need to create a key
    players[data.initials] = true;
    socket.initials = data.initials;
    io.emit('update-player-list', Object.keys(players));
  });

  // when deleting no data needs to be passed
  socket.on('disconnect', function () {
    delete players[socket.initials];
    io.emit('update-player-list', Object.keys(players));
  });


  socket.on('add-circle', function(data){
    io.emit('add-circle', data);
  });

  console.log('Client connected to socket.io!');
  socket.on('clear-page', function(){
    io.emit('clear-page');
  });

});


module.exports = io;
