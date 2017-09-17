function theBeatlesPlay(beatles, instrument) {
  var n = [];
  for (i = 0; i < beatles.length; i++) {
    n.push { [i]: `${beatles[i]} plays ${instrument[i]}}` };
  }
return n;
}
