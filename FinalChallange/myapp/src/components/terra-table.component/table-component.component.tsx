import React, { useState } from "react";
import Table from "terra-table";

import Cells from "../../models/Cell";
import Row from "../../models/Row";
import HeaderCell from "../../models/HeaderCell";
import ButtonVariant from "../terra-button/terra-button.component";

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

export function readURL(): Promise<Row[]> {
  let infoList: Row[] = [];
  return new Promise((resolve) => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then(async (res) => {
        await res.forEach((element, index) => {
          let subIndex = -1;
          let cellId: Cells = new Cells(
            `cell-${index}${subIndex++}`,
            element.id.toString()
          );
          let cellName: Cells = new Cells(
            `cell-${index}-${subIndex++}`,
            element.name
          );
          let cellUserName: Cells = new Cells(
            `cell-${index}-${subIndex++}`,
            element.username
          );
          let cellEmail: Cells = new Cells(
            `cell-${index}-${subIndex++}`,
            element.email
          );
          let cellAddress: Cells = new Cells(
            `cell-${index}-${subIndex++}`,
            "Turnului" //element.address
          );
          let cellPhone: Cells = new Cells(
            `cell-${index}-${subIndex++}`,
            element.phone
          );
          let cellWebsite: Cells = new Cells(
            `cell-${index}-${subIndex++}`,
            element.website
          );
          let cellCompany: Cells = new Cells(
            `cell-${index}-${subIndex++}`,
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
          let row = new Row(`row-${index}`, cells);
          infoList.push(row);
        });
        resolve(infoList);
      });
  });
}

async function renderBody() {
  let rez = await readURL();
  return rez;
}

const PaddingTable = () => (
  <Table
    summaryId="standard-table"
    summary="This table has standard padding."
    numberOfColumns={renderHeader().cells.length}
    cellPaddingStyle="standard"
    dividerStyle="horizontal"
    headerData={renderHeader()}
    bodyData={[{ rows: renderBody() }]}
  />
);

interface IState {
  bodyData: any;
}

class PaddingTable1 extends React.Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = {
      bodyData: [],
    };
  }

  async componentDidMount() {
    let rez = await readURL();
    this.setState({
      bodyData: [{ rows: rez }],
    });
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

export default PaddingTable1;
