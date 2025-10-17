//Exercise 1 - Layout the Board

document.addEventListener('DOMContentLoaded', function() {
  // Get div elements inside the board
  const board = document.getElementById('board');
  const squares = board.querySelectorAll('div');
  
  // 'Square' class to each div element to style as game squares
  squares.forEach(function(square) {
    square.classList.add('square');

//Exercise 2 
  // Initialize game state
  let currentPlayer = 'X';
  let gameState = ['', '', '', '', '', '', '', '', ''];
    
    // Add click event listener to each square
    square.addEventListener('click', function() {
      // Place X or O in the square
      square.textContent = currentPlayer;
      square.classList.add(currentPlayer);
      
      // Update game state
      gameState[index] = currentPlayer;
      
      // Switch player
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    });
  });
});