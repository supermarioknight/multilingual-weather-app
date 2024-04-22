import axios from "axios";
import { getCityCoords, getCityName } from "./weatherService";

jest.mock("axios");

describe("Weather API functions", () => {
  it("fetches city coordinates", async () => {
    const mockResponse = {
      data: {
        coord: { lon: -122.12, lat: 47.67 },
        sys: { country: "US" },
      },
    };
    axios.get.mockResolvedValue(mockResponse);

    const cityCoords = await getCityCoords("Redmond");
    expect(cityCoords).toEqual({ lon: -122.12, lat: 47.67, country: "US" });
  });

  it("fetches city name", async () => {
    const mockResponse = {
      data: {
        name: "Redmond",
        sys: { country: "US" },
      },
    };
    axios.get.mockResolvedValue(mockResponse);

    const cityName = await getCityName(-122.12, 47.67);
    expect(cityName).toEqual({ country: "US", name: "Redmond" });
  });

  it("fetches weather data", async () => {
    const mockResponse = {
      data: {
        main: { temp: 290.15, humidity: 60, pressure: 1013 },
        weather: [{ description: "Clear sky" }],
        name: "Redmond",
      },
    };
    axios.get.mockResolvedValue(mockResponse);
  });
});
