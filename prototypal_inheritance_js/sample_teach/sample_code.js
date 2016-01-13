// Object Literal notation for the one and only Arnold
var Arnold = {
  hasta: "hasta la vista... baby.",
  arms: {
    biceps: "huge",
    triceps: "pretty dang big",
    deltoids: "wow"
  },
  health: 10000,
  puny: false,
  friends: ["Carl Weathers", "Tom Arnold", "Linda Hamilton", "Danny Devito"],
  complain: "Come on! These henchmen are going to leave a bruise!",
  punch: function(enemy) {
    enemy.health -= 50;
    if (enemy.health < 0) return enemy.scream;
  },
  shotgun: function(enemy1, enemy2, enemy3) {
    enemy1.health -= 100;
    enemy2.health -= 100;
    enemy3.health -= 100;
    if (enemy1.health < 0) return enemy1.scream;
    if (enemy2.health < 0) return enemy2.scream;
    if (enemy3.health < 0) return enemy3.scream;
  },
  machete: function(enemy) {
    enemy.health -= 500;
    if (enemy.health < 0) {
      console.log("Stick Around!")
      return enemy.scream;
    }
  },
  dynamite: function(enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7) {
    enemy1.health -= 250;
    enemy2.health -= 250;
    enemy3.health -= 250;
    enemy4.health -= 250;
    enemy5.health -= 250;
    enemy6.health -= 250;
    enemy7.health -= 250;
    if (enemy1.health < 0) return enemy1.scream;
    if (enemy2.health < 0) return enemy2.scream;
    if (enemy3.health < 0) return enemy3.scream;
    if (enemy4.health < 0) return enemy4.scream;
    if (enemy5.health < 0) return enemy5.scream;
    if (enemy6.health < 0) return enemy6.scream;
    if (enemy7.health < 0) return enemy7.scream;
    console.log("HAHAHAHA!");
  }
}

// Hmm.... what if we want more of these?
var Henchman = {
  health: 20,
  scream: "AHHH!!",
  alarm: function() {
    alert("Intruder!!");
  }
}
