import React from "react";
import { render } from "@testing-library/react";
import ActionHelper from "./action";

describe("ActionHelper", () => {
  describe("when setFocus is called", () => {
    it("should get component using document.getElementById", () => {
      const elementId = "sample-button";

      document.getElementById = jest.fn();

      ActionHelper.setFocus(elementId);

      expect(document.getElementById).toBeCalled();
      expect(document.getElementById).toBeCalledWith(elementId);
    });
  });
});
