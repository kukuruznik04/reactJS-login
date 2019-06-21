import * as React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.StatelessComponent<{}> = () => {
  return (
    <div className="row col-12">

      <nav className="navbar navbar-expand-lg navbar-light bg-white" id="navbar">
        <img className="navbar-icon" src={require('../images/profile.png')} alt="logo" />
        <a className="navbar-brand" href="#">Профиль</a>
      </nav>
    </div>
  );
}
