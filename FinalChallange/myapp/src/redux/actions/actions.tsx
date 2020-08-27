import { Actions } from "./actionTypes";

export const addUser = (content) => ({
  type: Actions.AddUser,
  payload: {
    id: ++nextTodoId,
    content: content,
  },
});
