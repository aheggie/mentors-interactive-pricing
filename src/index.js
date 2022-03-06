console.log("before");

import React from "react";
import { render } from "react-dom";

console.log("hmm");

try {
  render(
    <React.StrictMode>hollow world</React.StrictMode>,
    document.getElementById("root")
  );
} catch (error) {
  console.error(error);
}
