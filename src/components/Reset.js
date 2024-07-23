import React from 'react'

const Reset = ({ board, setBoard, changeCharacter, setWinner, setDraw }) => {
    const reset = () => {
        setBoard(board.map((item) => (item = null)));
        changeCharacter("X");
        setWinner(false);
        setDraw(false);
    };

    return (
        <button
            onClick={() => reset()}
            style={{
                padding: "8px 24px",
                fontSize: "18px",
            }}
        >
            Reset
        </button>
    )
}

export default Reset
