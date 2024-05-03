import React from "react";
import "./Button.css";

interface ButtonProps {
  to: string;
  text: string;
  theme: string;
}

function Button({ to, text, theme }: ButtonProps) {
  return (
    <a className={"button-" + theme + " button"} href={to}>
      {text}
    </a>
  );
}

export default Button;
