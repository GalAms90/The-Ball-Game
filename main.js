'use strict'


function onBallClick(elBall) {

  var currentSize = elBall.offsetWidth;
  var newSize = currentSize + getRandomInt(20, 61);

  newSize > 400 ? newSize = 100 : newSize

  elBall.style.width = newSize + 'px';
  elBall.style.height = newSize + 'px';
  elBall.innerText = newSize;
}