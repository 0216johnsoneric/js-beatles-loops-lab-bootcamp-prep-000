function theBeatlesPlay(beatles, instruments) {
  var n = newArray();
  for (i = 0; i < beatles.length; i++) {
    n.push(`${beatles[i]} plays ${instruments[i]}`);
  }
return n;
}
