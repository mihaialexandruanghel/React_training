import React from "react";
import Button from "terra-button/lib/Button";
import { addUser } from "../../redux/actions/actions";
import { connect } from "react-redux";
import User from "../../models/User";

interface IProps {
  addUser: any;
}

interface IState {
  user: User[];
}

class ButtonVariant extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      user: [
        {
          id: "1",
          name: "1",
          username: "1",
          email: "1",
          phone: "1",
          website: "1",
        },
      ],
    };
  }

  addRow = () => {
    this.props.addUser(this.state.user);
  };

  render() {
    return (
      <div>
        <Button onClick={this.addRow} text="Neutral" />
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
