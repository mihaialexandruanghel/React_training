import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

interface IProps {
  addTodo: any;
}

interface IState {
  input: string;
}

class AddTodo extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = (input) => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input
          onChange={(e) => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button
          className="add-todo"
          disabled={this.state.input === ""}
          onClick={this.handleAddTodo}
        >
          Add Todo
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (content) => dispatch(addTodo(content)),
  };
};

export default connect(null, mapDispatchToProps)(AddTodo);
// export default AddTodo;
