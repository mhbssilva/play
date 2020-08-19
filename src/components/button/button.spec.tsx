import { shallow } from "enzyme";
import React from "react";
import Button, { IProps } from "./button";

const setup = (props: IProps) => {
  return shallow(<Button {...props} />);
};

describe("Button", () => {
  it("should render without errors", () => {
    const component = setup({ className: "btn" });

    expect(component).toHaveLength(1);
  });
});
