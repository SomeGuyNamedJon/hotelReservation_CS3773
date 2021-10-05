import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import  '../css/Navbar.css';
import { Button } from "./Button"

class Navbar extends Component {
  state = { clicked: false }

  handleClick = () => {
      this.setState({ clicked: !this.state.clicked })
  }



  render() {
    return(
      <nav className="NavbarItems">
            <h2 className="navbar-logo"><i className="fas fa-hotel"> </i>  Booking</h2>
            <div className="menu-icon" onClick={this.handleClick}>
              <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
              {MenuItems.map((item, index) => {
                return (
                    <li key={index}>
                        <a className={item.cName} href={item.url}>
                          {item.title}
                        </a> 
                    </li>
                )
          
              })}

              
            </ul>
            <Button>Sign Up</Button>
      </nav>
    )
  }
}

export default Navbar;
