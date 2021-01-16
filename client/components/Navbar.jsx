import React, { useState } from 'react';
import Webpack from './Webpack.jsx';
import Frontend from './Frontend.jsx';
import Backend from './Backend.jsx';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="container">
      <Webpack />
      <Frontend />
      <Backend />
    </div>
  );
}
export default Navbar;
