import React from "react";
import { render } from "@testing-library/react";
import AppContext, { appReducer, initialAppState } from "./appContext";

describe("appReducer function", () => {
  test("should update state with weather data", () => {
    const action = {
      type: "WEATHER",
      payload: { temperature: 25, condition: "Sunny" },
    };
    const newState = appReducer(initialAppState, action);
    expect(newState.weather).toEqual(action.payload);
  });
});

describe("initialAppState", () => {
  test("should have correct initial state values", () => {
    expect(initialAppState.weather).toBeNull();
    expect(initialAppState.unit).toBe("C");
    expect(initialAppState.city).toBe("Nairobi");
    expect(initialAppState.country).toBe("KE");
    expect(initialAppState.isDark).toBe(false);
    expect(initialAppState.geoCoords).toEqual({ lon: 36.85, lat: -1.3 });
    expect(initialAppState.lang).toBe("en");
  });
});

describe("AppContext", () => {
  test("should create a context with initial state", () => {
    const { Provider, Consumer } = AppContext;
    const { container } = render(
      <Provider value={initialAppState}>
        <Consumer>{(value) => <div>{JSON.stringify(value)}</div>}</Consumer>
      </Provider>
    );
    expect(container.textContent).toBe(JSON.stringify(initialAppState));
  });
});
