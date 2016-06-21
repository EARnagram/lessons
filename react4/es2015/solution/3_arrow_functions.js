// 3. ARROW FUNCTIONS

var lydia = {
  esp: function() {
    this.friends = 'ghosts';
    setTimeout(() => {
      console.log(this.friends)
    }, 100);
  }
};

lydia.esp();
