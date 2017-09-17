function theBeatlesPlay(beatles, instr) {
  var n = {};
  for (i = 0; i < beatles.length; i++) {
    n = { [i]: `${beatles[i]} plays ${instr[i]}}` };
  }
return n;
}