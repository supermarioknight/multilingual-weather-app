import React from "react";
import { render } from "@testing-library/react";
import Forecast from "./Forecast";
import AppContext from "../provider/appContext";
import { IntlProvider } from "react-intl";

export const TestWrapper = ({ children }) => (
  <IntlProvider locale="en">{children}</IntlProvider>
);

describe("Forecast component", () => {
  const mockWeatherData = {
    daily: [
      {
        dt: 1679875200,
        timezone: "America/New_York",
        weather: [{ icon: "01d", description: "Clear sky" }],
        temp: { max: 25, min: 15 },
      },
    ],
  };

  it("renders weather data correctly", () => {
    const { getByText, getByAltText } = render(
      <AppContext.Provider
        value={{ app: { isDark: false, unit: "C", weather: mockWeatherData } }}
      >
        <TestWrapper>
          <Forecast />
        </TestWrapper>
      </AppContext.Provider>
    );

    // Verify day
    const dayElement = getByText("Sunday");
    expect(dayElement).toBeInTheDocument();

    // Verify weather icon
    const weatherIcon = getByAltText("icon");
    expect(weatherIcon).toHaveAttribute("src", "/weather_icons/01d.png");

    // Verify weather description
    const weatherDescription = getByText("Clear sky");
    expect(weatherDescription).toBeInTheDocument();

    // Verify temperature
    const maxTemp = getByText("25°");
    const minTemp = getByText("15°");
    expect(maxTemp).toBeInTheDocument();
    expect(minTemp).toBeInTheDocument();
  });
});
