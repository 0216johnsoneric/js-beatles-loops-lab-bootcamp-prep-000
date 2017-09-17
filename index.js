// function theBeatlesPlay(beatles, instruments) {
//   for (i = 0; i < beatles.length; i++) {
//     n.push(`${beatles[i]} plays ${instruments[i]}`);
//   }
// return instruments;
// }

function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for(var i =0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArray;
}
