import geoCoords from "./geoCoords";

describe("geoCoords", () => {
  const mockGeolocation = {
    getCurrentPosition: jest.fn(),
  };

  beforeAll(() => {
    Object.defineProperty(global.navigator, "geolocation", {
      value: mockGeolocation,
      writable: true,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should resolve with coordinates when geolocation is supported", async () => {
    const mockCoords = { latitude: 123, longitude: 456 };
    mockGeolocation.getCurrentPosition.mockImplementationOnce(
      (successCallback) => successCallback({ coords: mockCoords })
    );

    const result = await geoCoords();

    expect(result).toEqual(mockCoords);
    expect(mockGeolocation.getCurrentPosition).toHaveBeenCalledTimes(1);
  });

  it("should reject with an error when geolocation is not supported", async () => {
    const mockError = new Error("Geolocation is not supported");
    mockGeolocation.getCurrentPosition.mockImplementationOnce(
      (_, errorCallback) => errorCallback(mockError)
    );

    await expect(geoCoords()).rejects.toThrow(mockError);
    expect(mockGeolocation.getCurrentPosition).toHaveBeenCalledTimes(1);
  });
});
