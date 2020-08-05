import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import classNames from "classnames/bind";
import styles from './LeftSidebar.module.scss';
let cx = classNames.bind(styles);

function LeftSidebar() {
  return (
    <div className={cx("wrapper")}>
      <Route>
      <ul>
        <li><NavLink exact to="/" activeClassName={cx("active")}>Przegląd projektów</NavLink></li>
        <li><NavLink to="/project/add-project" activeClassName={cx("active")}>Dodaj projekt</NavLink></li>
      </ul>
      </Route>
    </div>
  );
}

export default LeftSidebar;