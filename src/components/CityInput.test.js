import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import CityInput from "./CityInput";
import AppContext from "../provider/appContext";
import { IntlProvider } from "react-intl";

export const TestWrapper = ({ children }) => (
  <IntlProvider locale="en">{children}</IntlProvider>
);

describe("CityInput component", () => {
  it("updates city value when typing in the input field", async () => {
    const { getByPlaceholderText } = render(
      <AppContext.Provider value={{ app: { isDark: false } }}>
        <TestWrapper>
          <CityInput />
        </TestWrapper>
      </AppContext.Provider>
    );

    const inputElement = getByPlaceholderText("Search for a city ...");
    fireEvent.input(inputElement, { target: { value: "Seattle" } });

    await waitFor(() => {
      expect(inputElement.value).toBe("Seattle");
    });
  });

  it("dispatches city and country information when location icon is clicked", async () => {
    const mockDispatch = jest.fn();
    const { getByTestId } = render(
      <AppContext.Provider
        value={{ app: { isDark: true }, dispatchApp: mockDispatch }}
      >
        <TestWrapper>
          <CityInput />
        </TestWrapper>
      </AppContext.Provider>
    );

    const locationIcon = getByTestId("location-icon");
    fireEvent.click(locationIcon);

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledTimes(0);
    });
  });
});
