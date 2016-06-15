// |||||||||||||||||||||||||||||||||||
// ||||||||| CHANGE TO ES6 |||||||||||
// |||||||||||||||||||||||||||||||||||

// 3. ARROW FUNCTIONS

'use strict';

var lydia = {
  esp: function() {
    this.friends = 'ghosts';
    setTimeout(function() {
      console.log(this.friends)
    }, 100);
  }
};

lydia.esp();
