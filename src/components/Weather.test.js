import React from "react";
import { render } from "@testing-library/react";
import Weather from "./Weather";
import AppContext from "../provider/appContext";
import { IntlProvider } from "react-intl";

export const TestWrapper = ({ children }) => (
  <IntlProvider locale="en">{children}</IntlProvider>
);

describe("Weather component", () => {
  const mockWeatherData = {
    current: {
      dt: 1679874000,
      temp: 75,
      feels_like: 72,
      weather: [
        {
          icon: "01d",
          description: "Clear sky",
        },
      ],
      timezone: "America/Los_Angeles",
    },
    lang: "en-US",
    city: "Redmond",
    country: "United States",
  };
  it("renders correctly", () => {
    const { getByText } = render(
      <AppContext.Provider
        value={{ app: { isDark: false, weather: mockWeatherData, unit: "f" } }}
      >
        <TestWrapper>
          <Weather />
        </TestWrapper>
      </AppContext.Provider>
    );

    expect(getByText("167")).toBeInTheDocument();
    expect(getByText("Clear sky")).toBeInTheDocument();
  });
});
