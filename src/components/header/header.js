import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <div className="header d-flex">
      <Link to="/pokemon-db/">
        <div className="logo" href="#">
          Pokemon DB
        </div>
      </Link>
    </div>
  );
}

export default Header