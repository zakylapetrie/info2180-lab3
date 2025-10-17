document.addEventListener('DOMContentLoaded', function() {
  // Get div elements inside the board
  const board = document.getElementById('board');
  const squares = board.querySelectorAll('div');
  
  // 'Square' class to each div element to style as game squares
  squares.forEach(function(square) {
    square.classList.add('square');
  });
});