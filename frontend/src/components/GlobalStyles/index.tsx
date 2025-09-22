import "./GlobalStyle.module.scss";
import React from "react";

interface GlobalStylesProps {
  // Có thể thêm các props khác nếu cần
}

const GlobalStyles: React.FC<React.PropsWithChildren<GlobalStylesProps>> = ({
  children,
}) => {
  return <div>{children}</div>;
};

export default GlobalStyles;
