var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes? I don't know!)
var loopCount = "";
var findLoopCount = function() {
   if( bands.length >= vegetables.length) {
    loopCount = bands.length;
  } else {
    LoopCount = vegetables.length;
  }
  return loopCount;
}

findLoopCount();
console.log("loop count", loopCount, typeof loopCount );

//alternative way to say it: 
// bands.length > vegetables.length ? bands.length : vegetables.length 
//this is basically asking: is statement 1 true? then pick to the left of the colon, else pick to the right of the colon
//
//
//BOTH OF THESE RESULT IN AN 'undefined' at the end of the shorter array.

// Keep track of which band we're on in the loop. need to declare this variable outside of loop otherwise they'll just replace themselves. 
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";//you can say null if you want cause js will not assign that and you can tell that you purposely put that in to change it later.

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping
for (var loopTracker /*can name this anything */ = 0; loopTracker < loopCount; loopTracker++) {

  currentBand = bands[loopTracker]; //you can also add the plus equals here but then the below code will only run once except for the current band variable.
  currentVeggie = vegetables[loopTracker]

  // Add the band names into the correct <div>. the plus equals is here so it will make the whole sentance new each time.
  if (currentBand !== undefined) {
  bandElement.innerHTML += ( "<p>The Current Band is " +currentBand +".</p>" );
 }
 //this if statement fixes it so it does not display undefined if it's shorter than the other array.
  if (currentVeggie !== undefined){
  // Add the veggie names into the correct <div>
  veggieElement.innerHTML += ( "<p>The Current Vegetable is " +currentVeggie +".</p>" );
 }

}


