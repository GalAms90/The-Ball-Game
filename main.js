'use strict'


function onBallClick(elBall) {

  var currentSize = elBall.offsetWidth;
  var randomSize = getRandomInt(20, 61)
  var newSize = currentSize + randomSize

  newSize > 400 ? newSize = 100 : newSize

  var randomColor = getRandomColor()
  elBall.style.backgroundColor = randomColor

  elBall.style.width = newSize + 'px';
  elBall.style.height = newSize + 'px';
  elBall.innerText = newSize;
}