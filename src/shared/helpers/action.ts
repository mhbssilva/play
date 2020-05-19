class ActionHelper {
  public static setFocus = (elementId: string) => {
    document.getElementById(elementId)?.focus();
  };
}

export default ActionHelper;
