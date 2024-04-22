import React from "react";
import { renderHook } from "@testing-library/react";
import AppContext from "../provider/appContext";
import useTemp from "./useTemp";

describe("useTemp hook", () => {
  test('should convert temperature to Fahrenheit when unit is "F"', () => {
    const temp = 20;
    const { result } = renderHook(() => useTemp(temp, 2), {
      wrapper: ({ children }) => (
        <AppContext.Provider value={{ app: { unit: "F" } }}>
          {children}
        </AppContext.Provider>
      ),
    });

    expect(result.current).toBe("68.00");
  });

  test('should return temperature as is when unit is "C"', () => {
    const temp = 20;
    const { result } = renderHook(() => useTemp(temp, 2), {
      wrapper: ({ children }) => (
        <AppContext.Provider value={{ app: { unit: "C" } }}>
          {children}
        </AppContext.Provider>
      ),
    });

    expect(result.current).toBe("20.00");
  });

  test("should round temperature to specified number of decimal places", () => {
    const temp = 20.12345;
    const { result } = renderHook(() => useTemp(temp, 2), {
      wrapper: ({ children }) => (
        <AppContext.Provider value={{ app: { unit: "C" } }}>
          {children}
        </AppContext.Provider>
      ),
    });

    expect(result.current).toBe("20.12");
  });
});
