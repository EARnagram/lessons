console.log((
  function(f) {
    return function(n) {
      return n === 0 ? 1 : n * (f(f))(n-1);
    }
  }(function(f) {
      return function(n) {
        return n === 0 ? 1 : n * (f(f))(n-1);
      }
    })
)(4))


// function Y(z) {
//     return (function(g) {
// 	return z(function(m) {return (g(g))(m);});
//     })
//     (function(g) {
// 	return z(function(m) {return (g(g))(m);});
//     });
// }

// var fact = Y(
//   function(f) {
//     return function(n) {
// 	if (n == 0) {
// 	    return 1;
// 	} else {
// 	    return n*f(n-1);
// 	};
//     }
// });

// console.log(fact(4));
