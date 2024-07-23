import React from 'react'

const Board = ({ board, winner, character, checkWinner, setWinner, changeCharacter }) => {
    const boxClick = (index) => {
        if (board[index]) return;
        if (winner) return;
        board[index] = character;
        if (checkWinner()) {
            setWinner(true);
            return;
        }
        changeCharacter(character === "X" ? "O" : "X");
    };

    return (
        <section className="box-placeholder">
            {board.map((_, index) => {
                return (
                    <div
                        className="box"
                        onClick={() => boxClick(index)}
                        key={index}
                    >
                        {board[index]}
                    </div>
                );
            })}
        </section>
    )
}

export default Board
