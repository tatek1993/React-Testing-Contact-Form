import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import MutationObserver from "mutationobserver-shim";

test("renders App without crashing", () => {
  render(<App />);
});
