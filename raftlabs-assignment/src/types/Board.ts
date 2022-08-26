export type Cell = {
    column: number,
    row: number,
}

export type Block = {
    position: Cell,
    isSelected?: boolean,
    isPath?: boolean
}
