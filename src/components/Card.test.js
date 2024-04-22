import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";
import AppContext from "../provider/appContext";

describe("Card component", () => {
  it("renders children with default styles when isDark is false", () => {
    const { getByText } = render(
      <AppContext.Provider value={{ app: { isDark: false } }}>
        <Card>Hello, World!</Card>
      </AppContext.Provider>
    );

    const cardElement = getByText("Hello, World!");

    expect(cardElement).toHaveStyle("background: ");
    expect(cardElement).toHaveStyle("color: ");
  });

  it("renders children with custom styles when isDark is true", () => {
    const { getByText } = render(
      <AppContext.Provider value={{ app: { isDark: true } }}>
        <Card>Hello, Dark World!</Card>
      </AppContext.Provider>
    );

    const cardElement = getByText("Hello, Dark World!");

    expect(cardElement).toHaveStyle("background: rgb(25 32 45)");
    expect(cardElement).toHaveStyle("color: #fff");
  });
});
