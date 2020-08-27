import Cell from "./Cell";

class Row {
  key: string;
  cells: Cell[];

  constructor(key: string, children: Cell[]) {
    this.key = key;
    this.cells = children;
  }
}

export default Row;
