import React from "react";
import { render } from "@testing-library/react";
import Highlights from "./Highlights";
import AppContext from "../provider/appContext";
import { IntlProvider } from "react-intl";

export const TestWrapper = ({ children }) => (
  <IntlProvider locale="en">{children}</IntlProvider>
);

describe("Highlights component", () => {
  const mockWeatherData = {
    current: {
      humidity: 70,
      wind_speed: 5.5,
      sunrise: 1679875200,
      sunset: 1679918400,
      clouds: 40,
      uvi: 7,
      pressure: 1015,
    },
    timezone: "America/New_York",
  };

  it("renders weather highlights correctly", () => {
    const { getByText, getByAltText } = render(
      <AppContext.Provider
        value={{ app: { isDark: false, weather: mockWeatherData } }}
      >
        <TestWrapper>
          <Highlights />
        </TestWrapper>
      </AppContext.Provider>
    );

    const humidityValue = getByText("70");
    expect(humidityValue).toBeInTheDocument();

    const windSpeedValue = getByText("5.5");
    expect(windSpeedValue).toBeInTheDocument();

    const cloudsValue = getByText("40");
    expect(cloudsValue).toBeInTheDocument();

    const uvIndexValue = getByText("7");
    expect(uvIndexValue).toBeInTheDocument();

    const pressureValue = getByText("1015");
    expect(pressureValue).toBeInTheDocument();
  });
});
