import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Header from "./Header";
import AppContext from "../provider/appContext";
import { IntlProvider } from "react-intl";

export const TestWrapper = ({ children }) => (
  <IntlProvider locale="en">{children}</IntlProvider>
);

describe("Header component", () => {
  it("dispatches UNIT action when switching temperature units", () => {
    const mockDispatch = jest.fn();
    const { getByText } = render(
      <AppContext.Provider
        value={{ app: { isDark: false, unit: "C" }, dispatchApp: mockDispatch }}
      >
        <TestWrapper>
          <Header />
        </TestWrapper>
      </AppContext.Provider>
    );

    const fahrenheitButton = getByText("°F");
    fireEvent.click(fahrenheitButton);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "UNIT",
      payload: "F",
    });
  });

  it("dispatches LANG action when switching language", () => {
    const mockDispatch = jest.fn();
    const { getByText } = render(
      <AppContext.Provider
        value={{ app: { isDark: true, lang: "en" }, dispatchApp: mockDispatch }}
      >
        <TestWrapper>
          <Header />
        </TestWrapper>
      </AppContext.Provider>
    );

    const swahiliButton = getByText("SW");
    fireEvent.click(swahiliButton);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "LANG",
      payload: "sw",
    });
  });
});
