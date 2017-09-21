// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.
 
// 98 bottles of beer on the wall, 98 bottles of beer.
// Take one down and pass it around, 97 bottles of beer on the wall.
 
// 97 bottles of beer on the wall, 97 bottles of beer.
// Take one down and pass it around, 96 bottles of beer on the wall.
 
// 96 bottles of beer on the wall, 96 bottles of beer.
// Take one down and pass it around, 95 bottles of beer on the wall.
 
// 95 bottles of beer on the wall, 95 bottles of beer.
// Take one down and pass it around, 94 bottles of beer on the wall.
 
// ....
 
// 3 bottles of beer on the wall, 3 bottles of beer.
// Take one down and pass it around, 2 bottles of beer on the wall.
 
// 2 bottles of beer on the wall, 2 bottles of beer.
// Take one down and pass it around, 1 bottle of beer on the wall.
 
// 1 bottle of beer on the wall, 1 bottle of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.

var numBottles = 99;
var line1;
var line2;
while (numBottles >= 1) {
    if (numBottles > 1) {
        line1 = numBottles + " bottles of beer on the wall, " + numBottles + " bottles of beer.";
    } else {
        line1 = numBottles + " bottle of beer on the wall, " + numBottles + " bottle of beer.";
    }
    document.write(line1);
    document.write("<br>");
    numBottles--;
    if (numBottles == 0) {
        line2 = "Go to the store and buy some more, 99 bottles of beer on the wall.";
    }
    else if (numBottles > 1) {
        line2 = "Take one down and pass it around, " + numBottles + " bottles of beer on the wall.";
    } else {
        line2 = "Take one down and pass it around, " + numBottles + " bottle of beer on the wall.";
    }
    document.write(line2);
    document.write("<br>");
}