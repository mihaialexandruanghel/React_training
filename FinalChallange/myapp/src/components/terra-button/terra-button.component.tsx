import React from "react";
import Button from "terra-button/lib/Button";
import { readURL } from "../terra-table.component/table-component.component";
import Row from "../../models/Row";
import Cell from "../../models/Cell";
import { addUser } from "../../redux/actions/actions";
import { connect } from "react-redux";

interface IProps {
  addUser: any;
}

interface IState {
  bodyData: any;
}

class ButtonVariant extends React.Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = {
      bodyData: [],
    };
  }

  async addRow(): Promise<Row[]> {
    let rez = await readURL();
    let cellId: Cell = new Cell(" ", " ");
    let cells: Cell[] = [];
    cells.push(cellId);
    rez.unshift(new Row(" ", cells));
    return rez;
  }

  async componentDidMount() {
    let rez = await this.addRow();
    this.setState({
      bodyData: [{ rows: rez }],
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.addRow()} text="Neutral" />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (content) => dispatch(addUser(content)),
  };
};

export default connect(null, mapDispatchToProps)(ButtonVariant);
