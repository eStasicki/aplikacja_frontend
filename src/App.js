import React from 'react';

import 'stylesheets/main.scss';
import Header from 'components/Header';
import LeftSidebar from 'components/LeftSidebar';
import MainWrapper from './pages/mainWrapper';

function App() {
  return (
    <>
      <Header />
      <LeftSidebar />
      <MainWrapper />
    </>
  );
}

export default App;
