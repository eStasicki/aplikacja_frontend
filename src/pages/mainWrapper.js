import React from 'react';
import { Route, Switch} from 'react-router-dom';

import classNames from "classnames/bind";
import styles from './MainWrapper.module.scss';

import HomePage from 'pages/HomePage';

// Project
import AllProjects from 'pages/Projects/AllProjects';
import SingleProject from 'pages/Projects/SingleProject';
import AddProject from 'pages/Projects/AddProject';

let cx = classNames.bind(styles);

function MainWrapper() {
  return (
    <main className={cx("wrapper")}>
      <div className={cx("container")}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/project/all" component={AllProjects} />
        <Route path="/project/add-project" component={AddProject} />
        <Route path="/project/:id" component={SingleProject} />
      </Switch>
      </div>
    </main>
  );
}

export default MainWrapper;