// |||||||||||||||||||||||||||||||||||
// ||||||||| CHANGE TO ES6 |||||||||||
// |||||||||||||||||||||||||||||||||||

// 3. ARROW FUNCTIONS

var lydia = {
  esp: function() {
    this.friends = 'ghosts';
    var spookyGirl = this;
    setTimeout(function() {
      console.log(spookyGirl.friends)
    }, 100);
  }
};

lydia.esp();
