import { Actions } from "../actions/actionTypes";
import User from "../../models/User";
import Row from "../../models/Row";
import Cell from "../../models/Cell";

interface IUser {
  user: User[];
}

const initialState: IUser = {
  user: [
    { id: "1", name: "1", username: "1", email: "1", phone: "1", website: "1" },
  ],
};

async function addSingleUser(user: any) {
  let rez = await readURL(user);
  return rez;
}

export default function (state = initialState, action) {
  switch (action.type) {
    case Actions.AddUser: {
      addSingleUser(state.user).then((res) => {
        return { ...res };
      });
      break;
    }
    default:
      return state;
  }
}

function readURL(user: any): Promise<Row[]> {
  let infoList: Row[] = [];
  return new Promise((resolve) => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then(async (res) => {
        res.unshift(user[0]);
        await res.forEach((element) => {
          let row = populateTable(element);
          infoList.push(row);
        });
        resolve(infoList);
      });
  });
}

function populateTable(element: any) {
  let subIndex = -1;
  let cellId: Cell = new Cell(`cell-${subIndex++}`, element.id);
  let cellName: Cell = new Cell(`cell-${subIndex++}`, element.name);
  let cellUserName: Cell = new Cell(`cell-${subIndex++}`, element.username);
  let cellEmail: Cell = new Cell(`cell-${subIndex++}`, element.email);
  let cellAddress: Cell = new Cell(
    `cell-${subIndex++}`,
    "Turnului" //element.address
  );
  let cellPhone: Cell = new Cell(`cell-${subIndex++}`, element.phone);
  let cellWebsite: Cell = new Cell(`cell-${subIndex++}`, element.website);
  let cellCompany: Cell = new Cell(
    `cell-${subIndex++}`,
    "Cerner" //element.company
  );

  let cells: Cell[] = [];
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
