let scaryNewPeeps = [
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

let friends4eva = friends => {
  let buds4eva = '';
  friends.forEach((bud,index) => {
    if (index !== friends.length-1) {
      buds4eva += `${bud} and `
    } else {
      buds4eva += `${bud} are programming buds foreva!`
    }
  });
  return buds4eva;
}

export {scaryNewPeeps, friends4eva}

export default {scaryNewPeeps, friends4eva}
