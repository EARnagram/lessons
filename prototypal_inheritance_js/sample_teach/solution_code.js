// Constructor function to create multiple Arnold objects
var Terminator = function(health, puny, complain, friends) {
  this.hasta = "hasta la vista... baby";
  this.arms = {
    biceps: "huge",
    triceps: "pretty dang big",
    deltoids: "wow"
  };
  this.health = health;
  this.puny = puny;
  this.complain = complain;
  this.friends = friends;
}

// Methods added with prototype of constructor
Terminator.prototype.punch = function(enemy) {
  enemy.health -= 50;
  if (enemy.health <= 0) return enemy.scream;
}

Terminator.prototype.shotgun = function(enemy1, enemy2, enemy3) {
  enemy1.health -= 100;
  enemy2.health -= 100;
  enemy3.health -= 100;
  if (enemy1.health <= 0) return enemy1.scream;
  if (enemy2.health <= 0) return enemy2.scream;
  if (enemy3.health <= 0) return enemy3.scream;
}

Terminator.prototype.machete = function(enemy) {
  enemy.health -= 500;
  if (enemy.health < 0) {
    console.log("Stick Around!")
    return enemy.scream;
  }
}

Terminator.prototype.dynamite = function(enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7) {
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


// Henchman constructor function
var Henchman = function(scream, health, puny) {
  this.scream = scream;
  this.health = health;
  this.puny = puny;
  this.alarm = function() {
    alert("Intruder!");
  }
}

Henchman.prototype.fire = function (mrUniverse) {
  mrUniverse.health -= 100;
  if (mrUniverse.health <= 0) {
    mrUniverse.puny = true;
    return mrUniverse.complain;
  }
}

Henchman.prototype.nuke = function(conan) {
  conan.health -= 10000;
  if (conan.health <= 0) {
    conan.puny = true;
    return conan.complain;
  }
}
