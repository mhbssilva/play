import KeyType from "../enums/key-type";

class KeyHelper {
  public static getKeyType = (key: KeyboardEvent) => {
    switch (key.keyCode) {
      case 38:
        return KeyType.UP;
      case 40:
        return KeyType.DOWN;
      case 37:
        return KeyType.LEFT;
      case 39:
        return KeyType.RIGHT;
      default:
        return null;
    }
  };

  public static setKeyCallback = (
    key: KeyboardEvent,
    keyCallback: {
      upCallback?: Function;
      downCallback?: Function;
      leftCallback?: Function;
      rightCallback?: Function;
    }
  ) => {
    const keyType = KeyHelper.getKeyType(key);
    if (keyType === KeyType.UP && !!keyCallback.upCallback) {
      return keyCallback.upCallback();
    } else if (keyType === KeyType.DOWN && !!keyCallback.downCallback) {
      return keyCallback.downCallback();
    } else if (keyType === KeyType.LEFT && !!keyCallback.leftCallback) {
      return keyCallback.leftCallback();
    } else if (keyType === KeyType.RIGHT && !!keyCallback.rightCallback) {
      return keyCallback.rightCallback();
    }
  };
}

export default KeyHelper;
