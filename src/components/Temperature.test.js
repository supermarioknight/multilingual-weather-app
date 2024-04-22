import React from "react";
import { render } from "@testing-library/react";
import Temperature from "./Temperature";

jest.mock("../hooks/useTemp", () => ({
  __esModule: true,
  default: jest.fn((temperature) => `${temperature}°C`),
}));

describe("Temperature component", () => {
  it("renders the temperature correctly", () => {
    const temperature = 25;
    const { getByText } = render(<Temperature temperature={temperature} />);
  });
});
