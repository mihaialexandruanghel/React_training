import React, { useState } from "react";
import Table from "terra-table";

import Cells from "../../models/Cell";
import Row from "../../models/Row";
import HeaderCell from "../../models/HeaderCell";
import { connect } from "react-redux";
import User from "../../models/User";

function renderHeader() {
  let headerElement = [
    "id",
    "name",
    "username",
    "email",
    "address",
    "phone",
    "website",
    "company",
    "action",
  ];
  let cells: HeaderCell[] = [];
  headerElement.forEach((element, index) => {
    let cell = new HeaderCell(`header-${index}`, element, element);
    cells.push(cell);
  });
  return {
    cells: cells,
  };
}

interface IProps {
  addUser?: any;
  users?: Row[];
}

interface IState {
  bodyData?: any;
}

class PaddingTable1 extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      bodyData: [],
    };
  }

  readURL(): Promise<Row[]> {
    let infoList: Row[] = [];
    return new Promise((resolve) => {
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => res.json())
        .then(async (res) => {
          await res.forEach((element) => {
            let row = this.populateTable(element);
            infoList.push(row);
          });
          resolve(infoList);
        });
    });
  }

  populateTable(element: any) {
    let subIndex = -1;
    let cellId: Cells = new Cells(`cell-${subIndex++}`, element.id);
    let cellName: Cells = new Cells(`cell-${subIndex++}`, element.name);
    let cellUserName: Cells = new Cells(`cell-${subIndex++}`, element.username);
    let cellEmail: Cells = new Cells(`cell-${subIndex++}`, element.email);
    let cellAddress: Cells = new Cells(
      `cell-${subIndex++}`,
      "Turnului" //element.address
    );
    let cellPhone: Cells = new Cells(`cell-${subIndex++}`, element.phone);
    let cellWebsite: Cells = new Cells(`cell-${subIndex++}`, element.website);
    let cellCompany: Cells = new Cells(
      `cell-${subIndex++}`,
      "Cerner" //element.company
    );

    let cells: Cells[] = [];
    cells.push(
      cellId,
      cellName,
      cellUserName,
      cellEmail,
      cellAddress,
      cellPhone,
      cellWebsite,
      cellCompany
    );
    let row = new Row(`row-${subIndex}`, cells);
    return row;
  }

  async componentDidMount() {
    let rez = await this.readURL();
    if (this.props.users !== undefined) {
      this.setState({
        bodyData: [{ rows: this.props.users }],
      });
    } else {
      this.setState({
        bodyData: [{ rows: rez }],
      });
    }
  }

  render() {
    return (
      <div>
        <Table
          summaryId="standard-table"
          summary="This table has standard padding."
          numberOfColumns={renderHeader().cells.length}
          cellPaddingStyle="standard"
          dividerStyle="horizontal"
          headerData={renderHeader()}
          bodyData={this.state.bodyData}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  let users = state.user;
}

export default connect(mapStateToProps)(PaddingTable1);
