export default function GameBoard({onSelectSquare, board }) {

    let gameBoard = board;

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleClick(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });

    //     onSelectSquare();
    // }

    return <ol id='game-board'>
        {gameBoard.map((row, rowIndex) =>
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) =>
                        <li key={colIndex}>
                            <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={gameBoard[rowIndex][colIndex] != null}>
                                {playerSymbol}
                            </button>
                        </li>)}
                </ol>
            </li>)}
    </ol>
}