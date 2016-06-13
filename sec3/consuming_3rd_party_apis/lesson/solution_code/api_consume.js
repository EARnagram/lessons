var request = require('request'),
    locus   = require('locus');

var pokedex;
var bulbasaur;
var jynx;
var favePokemon;


// 1. Catch them all without losing hours of your life to a squirrel
//    turtle. (simply console.log the pokedex)
//
// request('http://pokeapi.co/api/v2/pokedex/2', function(error, response, body) {
//   if (!error && response.statusCode == 200) {
//     pokedex = JSON.parse(body);
//   };
//   console.log(pokedex);
// });

// 2. Start out with bulbasaur - console.log all info on bulbasaur
//
// request('http://pokeapi.co/api/v2/pokemon/1', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     bulbasaur = JSON.parse(body);
//     console.log(bulbasaur);
//   }
// });

// 3. get Jynx out of the pokedex!
//
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

// 4. Find a sprite of your favorite pokemon (if you don't have one,
//    use Lapras)
//
// request('http://pokeapi.co/api/v2/pokemon/131', function(error, response, body) {
//   if (!error && response.statusCode == 200) {
//     favePokemon = JSON.parse(body);
//     var faveSprite = favePokemon.sprites.front_default;
//     console.log(faveSprite);
//   }
// });


// BONUS: if you can, access the pokemon through the pokedex

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

// eval(locus);

// curl -i "https://api.github.com/repos/ga-students/WDI_DTLA_10/issues/"
// curl --silent "https://api.github.com/repos/ga-students/WDI_DTLA_10/issues/1" -u <valid_username>:<valid_password> | jsawk "return this.title + ': \n\n' + this.body"
// curl --silent "https://api.github.com/users/earnagram" | jsawk 'return this.bio'
// curl --request PATCH --data '{"bio": "your new bio"}'  "https://api.github.com/user" -u un:password
