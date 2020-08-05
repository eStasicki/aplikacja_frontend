import React from 'react';

import classNames from "classnames/bind";
import styles from './LeftSidebar.module.scss';
let cx = classNames.bind(styles);

function LeftSidebar() {
  return (
    <sidebar className={cx("wrapper")}>
      TO jest lewy sidebar
    </sidebar>
  );
}

export default LeftSidebar;