import Cell from "./Cell";

class HeaderCell extends Cell {
  id: string;

  constructor(id: string, key: string, children: string) {
    super(key, children);
    this.id = id;
  }
}

export default HeaderCell;
