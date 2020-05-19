import KeyType from "../enums/key-type";
import KeyHelper from "./key-helper";

describe("KeyHelper", () => {
  const upKeyboardEvent = {
    keyCode: 38,
  } as KeyboardEvent;
  const downKeyboardEvent = {
    keyCode: 40,
  } as KeyboardEvent;
  const leftKeyboardEvent = {
    keyCode: 37,
  } as KeyboardEvent;
  const rightKeyboardEvent = {
    keyCode: 39,
  } as KeyboardEvent;

  describe("when getKeyType is called", () => {
    it("should return UP enum value when arrow up is pressed", () => {
      const keyType = KeyHelper.getKeyType(upKeyboardEvent);
      expect(keyType).toBe(KeyType.UP);
    });
    it("should return DOWN enum value when arrow down is pressed", () => {
      const keyType = KeyHelper.getKeyType(downKeyboardEvent);
      expect(keyType).toBe(KeyType.DOWN);
    });
    it("should return LEFT enum value when arrow left is pressed", () => {
      const keyType = KeyHelper.getKeyType(leftKeyboardEvent);
      expect(keyType).toBe(KeyType.LEFT);
    });
    it("should return RIGHT enum value when arrow right is pressed", () => {
      const keyType = KeyHelper.getKeyType(rightKeyboardEvent);
      expect(keyType).toBe(KeyType.RIGHT);
    });
  });

  describe("when setKeyCallback is called", () => {
    it("should call upCallback enum value when arrow up is pressed", () => {
      const upCallback = jest.fn();
      const downCallback = jest.fn();
      const leftCallback = jest.fn();
      const rightCallback = jest.fn();

      KeyHelper.setKeyCallback(upKeyboardEvent, {
        upCallback,
        downCallback,
        leftCallback,
        rightCallback,
      });

      expect(upCallback).toBeCalled();
      expect(downCallback).not.toBeCalled();
      expect(leftCallback).not.toBeCalled();
      expect(rightCallback).not.toBeCalled();
    });

    it("should call downCallback enum value when arrow down is pressed", () => {
      const upCallback = jest.fn();
      const downCallback = jest.fn();
      const leftCallback = jest.fn();
      const rightCallback = jest.fn();

      KeyHelper.setKeyCallback(downKeyboardEvent, {
        upCallback,
        downCallback,
        leftCallback,
        rightCallback,
      });

      expect(upCallback).not.toBeCalled();
      expect(downCallback).toBeCalled();
      expect(leftCallback).not.toBeCalled();
      expect(rightCallback).not.toBeCalled();
    });

    it("should call leftCallback enum value when arrow left is pressed", () => {
      const upCallback = jest.fn();
      const downCallback = jest.fn();
      const leftCallback = jest.fn();
      const rightCallback = jest.fn();

      KeyHelper.setKeyCallback(leftKeyboardEvent, {
        upCallback,
        downCallback,
        leftCallback,
        rightCallback,
      });

      expect(upCallback).not.toBeCalled();
      expect(downCallback).not.toBeCalled();
      expect(leftCallback).toBeCalled();
      expect(rightCallback).not.toBeCalled();
    });

    it("should call rightCallback enum value when arrow right is pressed", () => {
      const upCallback = jest.fn();
      const downCallback = jest.fn();
      const leftCallback = jest.fn();
      const rightCallback = jest.fn();

      KeyHelper.setKeyCallback(rightKeyboardEvent, {
        upCallback,
        downCallback,
        leftCallback,
        rightCallback,
      });

      expect(upCallback).not.toBeCalled();
      expect(downCallback).not.toBeCalled();
      expect(leftCallback).not.toBeCalled();
      expect(rightCallback).toBeCalled();
    });
  });
});
