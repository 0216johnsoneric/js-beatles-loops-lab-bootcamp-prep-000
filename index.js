function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for(var i =0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArray;
}

var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(array) {
  var result= [];
  var i = 0;
  while(i < array.length) {
    result.push(array[i] + '!!!')
    i++;
  }
  return result;
}
