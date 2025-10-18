//
document.addEventListener('DOMContentLoaded', function() {
  // Get div elements inside the board
  const board = document.getElementById('board');
  const squares = board.querySelectorAll('div');
  
  // 'Square' class to each div element to style as game squares
  squares.forEach(function(square) {
    square.classList.add('square');

  // Initialize game state
  let currentPlayer = 'X';
  let gameState = ['', '', '', '', '', '', '', '', ''];
  const statusDiv = document.getElementById('status');
    
    // Add click event listener to each square
    square.addEventListener('click', function() {
      // Place X or O in the square
      square.textContent = currentPlayer;
      square.classList.add(currentPlayer);
      
      // Update game state
      gameState[index] = currentPlayer;

      // Check for winner
      checkWinner();
      
      // Switch player
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    });


     // Add mouseover event to add hover effect
    square.addEventListener('mouseenter', function() {
        square.classList.add('hover');
    });

    // Add mouseout event to remove hover effect
    square.addEventListener('mouseleave', function() {
        square.classList.remove('hover');
    });
  });

  // Function to check for a winner
  function checkWinner() {
    // All possible winning combinations
    const winningCombinations = [
      [0, 1, 2], // Top row
      [3, 4, 5], // Middle row
      [6, 7, 8], // Bottom row
      [0, 3, 6], // Left column
      [1, 4, 7], // Middle column
      [2, 5, 8], // Right column
      [0, 4, 8], // Diagonal top-left to bottom-right
      [2, 4, 6]  // Diagonal top-right to bottom-left
    ];
    
    // Check each winning combination
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      
      if (gameState[a] !== '' && 
          gameState[a] === gameState[b] && 
          gameState[a] === gameState[c]) {
        // We have a winner!
        statusDiv.textContent = `Congratulations! ${gameState[a]} is the Winner!`;
        statusDiv.classList.add('you-won');
        return;
      }
    }
  } 
});