import { useState } from "react";
import "../App.css";
import Reset from "../components/Reset";
import Board from "../components/Board";
import Status from "../components/Status";

const initialBoard = () => Array(9).fill(null);

const Header = () => {
    const [board, setBoard] = useState(initialBoard());
    let [character, changeCharacter] = useState("X");
    let [winner, setWinner] = useState(false);
    let [draw, setDraw] = useState(false);

    const checkWinner = () => {
        if (
            board[0] === character &&
            board[1] === character &&
            board[2] === character
        )
            return true;
        else if (
            board[3] === character &&
            board[4] === character &&
            board[5] === character
        )
            return true;
        else if (
            board[6] === character &&
            board[7] === character &&
            board[8] === character
        )
            return true;
        else if (
            board[0] === character &&
            board[3] === character &&
            board[6] === character
        )
            return true;
        else if (
            board[1] === character &&
            board[4] === character &&
            board[7] === character
        )
            return true;
        else if (
            board[2] === character &&
            board[5] === character &&
            board[8] === character
        )
            return true;
        else if (
            board[0] === character &&
            board[4] === character &&
            board[8] === character
        )
            return true;
        else if (
            board[2] === character &&
            board[4] === character &&
            board[6] === character
        )
            return true;
        else if (
            board[0] &&
            board[1] &&
            board[2] &&
            board[3] &&
            board[4] &&
            board[5] &&
            board[6] &&
            board[7] &&
            board[8]
        )
            setDraw(true);
    };

    return (
        <header className="App-header">
            <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Status draw={draw} winner={winner} character={character} />
                    <Reset board={board} setBoard={setBoard} changeCharacter={changeCharacter} setWinner={setWinner} setDraw={setDraw} />
                </div>
                <Board board={board} winner={winner} character={character} checkWinner={checkWinner} setWinner={setWinner} changeCharacter={changeCharacter} />
            </div>
        </header>
    )
}
export default Header
