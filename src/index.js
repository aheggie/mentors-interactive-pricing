import { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";

try {
  render(
    <StrictMode>
      <App></App>
    </StrictMode>,
    document.getElementById("root")
  );
} catch (error) {
  console.error(error);
}
