var scaryNewPeeps = [
  'Alex Aleksanyan',
  'Jacob Allen',
  'Adam Berro',
  'Adrian Delpha',
  'Kyle Firstenberg',
  'Wen Jen',
  'Stephen Kempisty',
  'Nathan Nguyen',
  'Stephanie Wilkinson',
  'Christian Zamora'
];

function friends4eva(friends) {
  'use strict';
  let buds4eva = '';
  friends.forEach((e,i) => {
    if (i !== friends.length-1) {
      buds4eva += `${e} and `
    } else {
      buds4eva += `${e} are programming buds foreva!`
    }
  });
  return buds4eva;
}
