'use strict'


function onBallClick(elBall) {

  var currentSize = elBall.offsetWidth;
  var newSize = currentSize + 50;

  elBall.style.width = newSize + 'px';
  elBall.style.height = newSize + 'px';
  elBall.innerText = newSize;
}