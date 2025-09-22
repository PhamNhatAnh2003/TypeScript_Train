import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";


const cx = classNames.bind(styles);

interface ButtonProps {
  children: React.ReactNode; 
  onClick?: () => void; 
  variant?: "primary" | "secondary" | "outline"; 
  disabled?: boolean; 
  className?: string; 
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  className,
}) => {
  return (
    <button
      className={cx(styles.button, styles[variant], className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;