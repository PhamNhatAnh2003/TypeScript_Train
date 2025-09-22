import React from "react";
import styles from "./HeaderUser.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface HeaderProps {
  className?: string;
}

const HeaderUser: React.FC<HeaderProps> = ({ }) => {
  return (
    <header className={cx("header")}>
      <div className={cx("logo")}>LIBRARI_HL</div>
      <nav className={cx("nav")}>
        <ul>
          <li>
            <a href="/profile">Tài khoản</a>
          </li>
          <li>
            <a href="/orders">Đơn hàng</a>
          </li>
          <li>
            <a href="/logout">Đăng xuất</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderUser;
