import classNames from "classnames/bind";
import styles from "./UserDefault.module.scss";
import HeaderUser from "../HeaderUser/HeaderUser";


const cx = classNames.bind(styles);

interface UserProps {
  children: React.ReactNode;
}

const UserDefault = ({ children }: UserProps) => {
  return (
    <div className={cx("user-default-layout")}>
      <HeaderUser className={cx("default-header")} />
      <div className={cx("content")}>{children}</div>
    </div>
  );
};

export default UserDefault;
