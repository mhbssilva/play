import React from "react";
import "./button.scss";

interface IProps {
  className?: string;
  icon?: any;
  id?: string;
  label?: string;
  onClick?: Function;
  onFocus?: Function;
  onKeyPress?: Function;
}

const Button = (props: IProps) => {
  const { className, icon, id, label, onClick, onFocus, onKeyPress } = props;

  return (
    <button
      id={id}
      key={`btn-${id}`}
      className={`button focusable ${className ?? ""}`}
      onFocus={() => (onFocus ? onFocus() : null)}
      onClick={() => (onClick ? onClick() : null)}
      onKeyDown={
        onKeyPress ? (e: any) => onKeyPress(e as KeyboardEvent) : () => {}
      }
      tabIndex={0}
    >
      {icon}
      <label>{label}</label>
    </button>
  );
};

export default Button;
