var $form, $input, $memoriesList, $clearAll;

$(document).ready(function() {
  $form         = $('form');
  $input        = $('input');
  $memoriesList = $('#memories-list');
  $clearAll     = $('#clear-all');

  $form.on('submit', function(evt) {
    evt.preventDefault();

    var memory = $input.val();

    if (memory) {
      console.log('Memory submitted:', memory);
      add2Memory(memory);
      renderMemory(memory);
      $input.val('');
    }
  });

  $memoriesList.on('click', '.remove-memory', function(evt) {
    var $del = $(this).closest('tr');

    console.log("Removing memory: ", $del.text().slice(0, -2));
    $del.remove();
    removeMemory($del.text().slice(0, -2));
  });

  $clearAll.on('click', function(evt) {
    console.log('Clearing Local Storage!');
    localStorage.removeItem('pensieve'); // `localStorage.clear();` works too!
    $memoriesList.empty();
  });

  if (localStorage.pensieve) getMemories();
});

function renderMemory(memory) {
  var $delButton = $('<span class="button-error remove-memory button-xsmall">X</span>');
  var $memoryEl  = $('<tr>').append($('<td>').text(memory + ' ').append($delButton));
  $memoryEl.appendTo($memoriesList);
}

function add2Memory(memory) {
  if (localStorage.pensieve == undefined) {
    localStorage.setItem("pensieve", "[]");
  }
  var pensieve = JSON.parse(localStorage.pensieve);
  pensieve.push(memory);
  if (localStorage.pensieve.length !== pensieve.length) {
    localStorage.setItem("pensieve", JSON.stringify(pensieve));
  }
}

function getMemories() {
  var memories = JSON.parse(localStorage.pensieve);
  memories.forEach(memory => {
    renderMemory(memory);
  });
}

function removeMemory(trMemory) {
  var pensieve = JSON.parse(localStorage.pensieve);
  var ind = pensieve.indexOf(trMemory);
  pensieve.splice(ind, 1);
  if (localStorage.pensieve.length !== pensieve.length) {
    localStorage.setItem("pensieve", JSON.stringify(pensieve));
  }
}
