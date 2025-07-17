import { rollDice, moveToken, getNextPlayer } from '../Logics/GameLogics';

const [diceValue, setDiceValue] = useState(0);
const [currentPlayer, setCurrentPlayer] = useState(0);
const [positons, setPositions] = useState([0, 0, 0, 0,]); // Assuming 4 players

function Board() {

    const handleDiceRoll = () => {
        const value = rollDice();
        setDiceValue(value);

        setPositions(prevPositions => {
            const update = [...prevPositions];
            update[currentPlayer] = moveToken(prevPositions[currentPlayer], value);
            return update;
        });

        setCurrentPlayer(getNextPlayer(currentPlayer));

    };

    const resetGame = () => {
        setDiceValue(0);
        setCurrentPlayer(0);
        setPositions([0, 0, 0, 0]); // Reset positions for 4 players


        return (
            <div>
                <h1>Ludo Game Board</h1>

                <p>Current Player: {currentPlayer + 1}</p>
                <p>Dice Value: {diceValue ?? 'Not rolled yet'}</p>
                <button onClick={handleDiceRoll}>Roll Dice</button>
                <button onClick={resetGame}>Reset Game</button>

                <h3>Player Position</h3>
                <ul>
                    {positions.map((position, index) => (
                        <li key={index}>Player {index + 1}: Position {position}</li>
                    ))}
                </ul>
            </div>
        );
    }
};
// Export the whole component
export default Board;





