import * as React from "react";
import Address from "./components/address.component";
//class component example

interface Props {
  firstName: string;
}

interface State {
  lastName: string;
}
class HomeClassType extends React.Component<Props, State> {
  state: State = {
    lastName: "Jamal"
  };
  render() {
    return (
      <div>
        Hello, {this.props.firstName} {this.state.lastName}
        <Address postcode="IP224NW" />
      </div>
    );
  }
}

export default HomeClassType;
