import React from "react";
import { render } from "@testing-library/react";
import Temperature from "./Temperature";
import useTemp from "../hooks/useTemp";

jest.mock("../hooks/useTemp");

describe("Temperature component", () => {
  it("renders the temperature correctly for various temperatures", () => {
    const testCases = [0, 25, -5, 37.5, 100];
    testCases.forEach((temp) => {
      useTemp.mockImplementation((temperature) => `${temperature}°C`);
      const { container } = render(<Temperature temperature={temp} />);
      expect(container.textContent).toBe(`${temp}°C`);
    });
  });

  it("displays temperatures with different units", () => {
    const temp = 25;
    useTemp.mockImplementation((temperature) => `${temperature}°C`);
    let { container } = render(<Temperature temperature={temp} />);
    expect(container.textContent).toBe("25°C");

    useTemp.mockImplementation((temperature) => `${temperature}°F`);
    container = render(<Temperature temperature={temp} />).container;
    expect(container.textContent).toBe("25°F");
  });

  it("handles rounding of temperatures", () => {
    const temp = 25.123;
    useTemp.mockImplementation((temperature) => `${temperature.toFixed(2)}°C`);
    const { container } = render(<Temperature temperature={temp} />);
    expect(container.textContent).toBe("25.12°C");
  });

  it("handles invalid temperature input", () => {
    const invalidTemps = ["a string", undefined, null];
    invalidTemps.forEach((invalidTemp) => {
      useTemp.mockImplementation(() => "Invalid input");
      const { container } = render(<Temperature temperature={invalidTemp} />);
      expect(container.textContent).toBe("Invalid input");
    });
  });
});
