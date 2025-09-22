import React from "react";
import classNames from "classnames/bind";
import styles from "./Hello.module.scss";

const cx = classNames.bind(styles);


interface HelloProps {
  name: string;
}

const Hello: React.FC<HelloProps> = ({ name }) => {
  return <div className={cx("name")}>Hello, {name}!</div>;
};

export default Hello;
