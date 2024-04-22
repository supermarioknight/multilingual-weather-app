import React from "react";
import { render } from "@testing-library/react";
import Loader from "./Loader";
import { IntlProvider } from "react-intl";

export const TestWrapper = ({ children }) => (
  <IntlProvider locale="en">{children}</IntlProvider>
);
describe("Loader", () => {
  it("should render correctly without text", () => {
    const { asFragment } = render(
      <TestWrapper>
        <Loader />
      </TestWrapper>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render correctly with text", () => {
    const { asFragment } = render(
      <TestWrapper>
        <Loader showText />
      </TestWrapper>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
