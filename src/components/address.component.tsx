import * as React from "react";

//function component example

const Address: React.FunctionComponent<{
  postcode: string;
}> = props => (
  <div>
    <div>Willbye avenue</div>
    <div>{props.postcode}</div>
  </div>
);

export default Address;
