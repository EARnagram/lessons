console.log("linked!");

(document.getElementById('take').onkeyup = function(){
    $('#place').text($('#take').val());
})();
