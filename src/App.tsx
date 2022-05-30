import React from 'react';

import { Header } from './components/header';
import { Main } from './components/main';
import { Footer } from './components/footer';

import './index.css';
export const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );

};

export default App;