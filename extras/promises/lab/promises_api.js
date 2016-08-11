var locus = require('locus'); // if needed, `eval(locus);`

var request = require('request');

// |||||||||| Change to Promises ||||||||||

// request('http://pokeapi.co/api/v2/pokedex/2', function(error, response, body) {
//   if (!error && response.statusCode == 200) {
//     pokedex = JSON.parse(body);
//     pokedex.pokemon_entries.forEach(function(pokemon) {
//       if (pokemon.pokemon_species.name === 'jynx'){
//         jynx = pokemon;
//         console.log(jynx);
//       }
//     })
//   }
// });

// Use promises to find your favorite pokemon, then find your favorite
// ability/move of that pokemon!


// ||||||||||||||||||| BONUS!! |||||||||||||||||||

// |||||||||| Change to Promises ||||||||||

// request('http://pokeapi.co/api/v2/pokedex/2', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     pokedex = JSON.parse(body);
//     pokedex.pokemon_entries.forEach(function(pokemon) {
//       if (pokemon.pokemon_species.name === "lapras") {
//         var favePokemonUrl = pokemon.pokemon_species.url;
//         request(favePokemonUrl, function(error, response, body) {
//           if (!error && response.statusCode == 200) {
//             var holder = JSON.parse(body);
//             favePokemonUrl = holder.varieties[0].pokemon.url;
//             request(favePokemonUrl, function(error, response, body) {
//               if (!error && response.statusCode == 200) {
//                 favePokemon = JSON.parse(body);
//                 var foundFaveSprite = favePokemon.sprites.front_default;
//                 console.log(foundFaveSprite)
//               }
//             });
//           }
//         });
//       }
//     });
//   }
// });

// Access your favortie pokemon by going through the pokedex using
// promises!
