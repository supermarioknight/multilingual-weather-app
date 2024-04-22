import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import AppContext from "../provider/appContext";

describe("Footer component", () => {
  it("renders GitHub link with correct href", () => {
    const { getByText } = render(
      <AppContext.Provider value={{ app: { isDark: false } }}>
        <Footer />
      </AppContext.Provider>
    );

    const githubLink = screen.getByText("GitHub").parentElement;
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/supermarioknight/multilingual-weather-app"
    );
  });

  it("renders Telegram link with correct href", () => {
    const { getByText } = render(
      <AppContext.Provider value={{ app: { isDark: true } }}>
        <Footer />
      </AppContext.Provider>
    );

    const telegramLink = getByText("Telegram").parentElement;
    expect(telegramLink).toHaveAttribute("href", "https://t.me/alchsun");
  });
});
