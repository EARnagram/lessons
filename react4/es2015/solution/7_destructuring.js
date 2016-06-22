// 7. DESTRUCTURING

var gremlins = [mohawk, daffy, george, lenny, phantom] = [
                                                           "Mohawk",
                                                           "Daffy",
                                                           "George",
                                                           "Lenny",
                                                           "Phantom"
                                                         ];

console.log(mohawk);
console.log(daffy);
console.log(gremlins);

var adorable = "adorbs";
var sweet    = "so nice";
var hairy    = true;

var gizmo = {adorable, sweet, hairy};

console.log(gizmo);
