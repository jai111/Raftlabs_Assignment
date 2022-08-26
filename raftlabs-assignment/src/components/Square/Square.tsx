import React from 'react';
import { Block, Cell } from '../../types/Board';

import './Square.scss';

type CellPropsType = {
    block: Block,
    setKnightPosition: (_knightPosition: Cell) => void
}

function Square(props: CellPropsType) {
    const { block, setKnightPosition } = props;

    return (
        <div
            className={`cell ${block.isSelected && 'isSelected'} ${block.isPath && 'isPath'}`}
            onClick={() => setKnightPosition(block.position)}
        />
    );
}

export default Square;
