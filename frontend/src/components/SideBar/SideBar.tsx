import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./SideBar.module.scss";
import classNames from "classnames/bind";
import Button from "@components/Button";

const cx = classNames.bind(styles);

const SideBar = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("search-bar")}>
        <FontAwesomeIcon icon={faUser} />
        <span>Marketerz</span>
      </div>
      <div className={cx("btn")}>
        <Button>PERSONAL</Button>
        <Button>BUSINESS</Button>
      </div>
      <div className={cx("main-content")}>
        <div className={cx("item")}>
          <FontAwesomeIcon icon={faUser} />
          <span>Dashboard</span>
        </div>
        <div className={cx("item")}>
          <FontAwesomeIcon icon={faUser} />
          <span>Product</span>
        </div>
        <div className={cx("item")}>
          <FontAwesomeIcon icon={faUser} />
          <span>Mail</span>
        </div>
        <div className={cx("item")}>
          <FontAwesomeIcon icon={faUser} />
          <span>Campaigns</span>
        </div>
        <div className={cx("item")}>
          <FontAwesomeIcon icon={faUser} />
          <span>Contacts</span>
        </div>
      </div>
      <div className={cx("line")}></div>
      <div className={cx("bottom-content")}>
        <span>Account</span>
        <div className={cx("item")}>
          <FontAwesomeIcon icon={faUser} />
          <span>Notifications</span>
        </div>
        <div className={cx("item")}>
          <FontAwesomeIcon icon={faUser} />
          <span>Chat</span>
        </div>
        <div className={cx("item")}>
          <FontAwesomeIcon icon={faUser} />
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
