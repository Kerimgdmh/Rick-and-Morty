import React, { Component } from 'react'
import "./Navbar.css";




export class Navbar extends Component {
  render() {
    return (
        <nav className="navbar">
        <div className="navbar-brand">
          <span className="logo">Logo</span>
        </div>
        <ul className="nav-list">
          <li className="nav-item">Bölümler</li>
          <li className="nav-item">Karakterler</li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
