// Roll a dice which returns a value from 1 to 6
// This function simulates rolling a six-sided dice
export function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Move a token (returns a new positon based on dice roll)
export function moveToken(currentPosition, diceValue) {
    const newPosition = currentPosition + diceValue;
    // Ensure the new position does not exceed 100
    return newPosition;
}

// Switch to the next player
export  function getNextPlayer(currentPlayer, totalPlayers = 4) {
    return (currentPlayer + 1) % totalPlayers;
}
