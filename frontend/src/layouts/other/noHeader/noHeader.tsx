import type { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./NoHeader.module.scss";

const cx = classNames.bind(styles);

interface NoHeaderProps {
  children: ReactNode;
}

// Đây là wrapper, luôn trả JSX.Element
const NoHeader = ({ children }: NoHeaderProps): JSX.Element => {
  return <div className={cx("no-header-layout")}>{children}</div>;
};

export default NoHeader;
