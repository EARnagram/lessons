// |||||||||||||||||||||||||||||||||||
// ||||||||| CHANGE TO ES6 |||||||||||
// |||||||||||||||||||||||||||||||||||

// 3. ARROW FUNCTIONS

// Remove the need for `spookyGirl` with a fat arrow

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
