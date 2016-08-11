// ||||||||||| Change to Promise ||||||||||||

// 1. Promise Me

function promiseMe(cb) {
  setTimeout(function() {
    cb("I promise.");
  }, 3000);
};

promiseMe(function(message) {
  console.log(`Okay… ${message}`)
});


// 2. Arnold Needs Turbo Man

function getAhnold(cb) {
  setTimeout(function() {
    cb({
        name: "Ahnold",
        occupation: "mattress salesman",
        age: 42,
        sonWants: "Turbo Man"
      });
  }, 2000);
};

function ahnoldNeeds(cb) {
  setTimeout(function() {
    cb("I need dat toiy!");
  }, 1000);
};

getAhnold(function(ahnold) {
  ahnoldNeeds(function(message) {
    console.log(`${ahnold.sonWants}! ${message}`);
  })
});
