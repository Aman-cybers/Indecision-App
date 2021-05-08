import React from 'react'

const Header = (props) =>
(
  <div className='header'>
    <div className="container">
      <div className="header__title">
        <h1 className="header-h">{props.title}</h1>
        <p className="header-p">--By Aman</p></div>

      {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
    </div>

  </div>
)


Header.defaultProps = {
  title: 'Indecision'
}

export default Header;