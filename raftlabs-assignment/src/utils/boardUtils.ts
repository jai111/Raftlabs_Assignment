import { Block, Cell } from '../types/Board';

const KNIGHT_MOVES_DELTA: Cell[] = [
    { row: -1, column: -2 },
    { row: -2, column: -1 },
    { row: -2, column: 1 },
    { row: -1, column: 2 },
    { row: 1, column: 2 },
    { row: 2, column: 1 },
    { row: 2, column: -1 },
    { row: 1, column: -2 }
];

const isValidCell = (numRows: number, numColumns: number, row: number, column: number): Boolean => {
    if (row < 0 || column < 0 || row >= numRows || column >= numColumns) {
        return false;
    }

    return true;
};

export const getGrid = (numRows: number, numColumns: number): Block[][] => {
    const grid = [];

    for (let i = 0; i < numRows; i += 1) {
        const row: Block[] = [];

        for (let j = 0; j < numColumns; j += 1) {
            row.push({
                position: {
                    row: i,
                    column: j
                },
                isSelected: false,
                isPath: false
            });
        }

        grid.push(row);
    }

    return grid;
};

export const getPossibleMoves = (knightPosition: Cell, numRows: number, numColumns: number): Cell[] => {
    const possibleMoves = KNIGHT_MOVES_DELTA.map(({ row, column }): Cell => ({
        row: knightPosition.row + row,
        column: knightPosition.column + column
    })).filter(({ row, column }) => isValidCell(numRows, numColumns, row, column));

    return possibleMoves;
};
