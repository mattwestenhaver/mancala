// -------- VARIABLES ------- //

var playerOneWells = $('.leftwell')
var playerOneBucket = $('.leftbucket')

var playerTwoWells = $('.rightwell')
var playerTwoBucket = $('.rightbucket')

var pebbles;

var clickedWell;


// ------- FUNCTIONS ------- //
playerOneWells.text(4)
playerOneBucket.text(0)

playerTwoWells.text(4)
playerTwoBucket.text(0)

// add event listeners to player one wells
for (var i = 0; i < playerOneWells.length; i++) {
  playerOneWells.eq(i).on('click', boxClickHandler)
}

// add event listeners to player two wells
for (var i = 0; i < playerTwoWells.length; i++) {
  playerTwoWells.eq(i).on('click', boxClickHandler)
}

// what happens when a well is clicked
function boxClickHandler() {
  //console.log('clicked a well!')
  clickedWell = $(this)
  whatPath()
}

// what path do the pebbles take
function whatPath() {
  pebbles = clickedWell.text()
  clickedWell.text(0)
}
