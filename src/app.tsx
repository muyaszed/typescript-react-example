import * as React from "react";
import * as ReactDom from "react-dom";

import HomeClassType from "./home";

ReactDom.render(
  <div>
    <HomeClassType firstName="Yazed" />
  </div>,
  document.getElementById("root")
);
