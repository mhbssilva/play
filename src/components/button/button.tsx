import React from "react";
import "./button.scss";

interface IProps {
  className: string;
  icon?: any;
  label?: string;
  onClick: Function;
  onFocus: Function;
}

const Button = (props: IProps) => {
  const { className, icon, label, onClick, onFocus } = props;

  return (
    <button
      className={`button focusable ${className}`}
      onFocus={() => onFocus()}
      onClick={() => onClick()}
      tabIndex={0}
    >
      {icon}
      <label>{label}</label>
    </button>
  );
};

export default Button;
