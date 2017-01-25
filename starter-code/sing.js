console.log("sing.js loaded");

var sing = function(x) {
  for (var i=x; i>1;i--) {
    console.log(
      i+" bottles of beer on the wall, " +
      i+" bottles of beer! Take one down and pass it around, ");
      if (i==2){
        break;
      }
      else {
        console.log((i-1) + " bottles of beer on the wall!")
      }
    };
  console.log(1 + " bottle of beer on the wall! " + 1 +" bottle of beer on the wall, " +
    1+" bottle of beer! Take one down and pass it around, " +
    "No more bottles of beer on the wall!")

};

sing(prompt("Please enter a number"));
