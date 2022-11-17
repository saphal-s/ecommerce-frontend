import React,{ Fragment } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import './components/css/style.css';
import Carousels from './components/layouts/Carousels';
import Latest from './components/pages/Latest';
import Boysf from './components/pages/Boysf';
import Ladiesf from './components/pages/Ladiesf';
import Personalb from './components/pages/Personalb';
import Electronics from './components/pages/Electronics';
import Furnitures from './components/pages/Furnitures';
import Foots from './components/layouts/Foots';
import Footers from './components/layouts/Footers';
import Features from './components/pages/Features';


function App() {
  return (
    <Fragment>
      <Navbar/>
      <Carousels/>
      <Latest/>
      <Boysf/>
      <Ladiesf/>
      <Personalb/>
      <Electronics/>
      <Furnitures/>
      <Features/>
      <Foots/>
      <Footers/>
    </Fragment>
  );
}

export default App;
