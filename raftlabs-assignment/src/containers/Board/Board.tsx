import React, { useEffect, useState } from 'react';
import Square from '../../components/Square/Square';
import { Block, Cell } from '../../types/Board';
import { getGrid, getPossibleMoves } from '../../utils/boardUtils';

import './Board.scss';

type BoardPropsType = {
    numsRows: number,
    numColumns: number
}

function Board(props: BoardPropsType) {
    const [boardGrid, setBoardGrid] = useState<Block[][]>();

    useEffect(() => {
        const grid = getGrid(props.numsRows, props.numColumns);
        setBoardGrid(grid);
    }, []);

    const setKnightPositionHandler = (selectedCell: Cell) => {
        if (boardGrid) {
            const { row, column } = selectedCell;

            const newBoardGrid = getGrid(props.numsRows, props.numColumns);
            newBoardGrid[row][column].isSelected = true;

            const possibleMoves = getPossibleMoves(selectedCell, props.numColumns, props.numColumns);
            possibleMoves.forEach(move => { newBoardGrid[move.row][move.column].isPath = true; });

            setBoardGrid(newBoardGrid);
        }
    };

    const clearBoardHandler = () => {
        const newBoardGrid = getGrid(props.numsRows, props.numColumns);
        setBoardGrid(newBoardGrid);
    };

    return (
        <div className="board">
            {
                boardGrid?.map(row => (
                    <div className="row">
                        {
                            row.map(block => <Square block={block} setKnightPosition={setKnightPositionHandler} />)
                        }
                    </div>
                ))
            }
            <h4 className="note">Tap on a cell to position the knight</h4>
            <button type="button" className="clearButton" onClick={clearBoardHandler}>Clear Board</button>
        </div>
    );
}

export default Board;
