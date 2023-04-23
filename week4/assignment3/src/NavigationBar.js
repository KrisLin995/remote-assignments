import React, { useState, useEffect } from 'react';
import menuIcon from '../src/menu.png';

function NavigationBar() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 800) {
        setShowNav(false);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function handleIconClick() {
    setShowNav(!showNav);
  }

  function handleNavCloseClick() {
    setShowNav(false);
  }

  return (
    <nav>
      <div className="no-nav-active">
        <div className="icon" onClick={handleIconClick}>
          <img src={menuIcon} alt="menu icon" />
        </div>
      </div>
      {showNav && window.innerWidth <= 800 && (
        <ul className="side-nav" style={{ height: '100%', boxShadow:"1px 0 5px 0 #555", backgroundColor: "white"}}>
          <li style={{ marginTop: '8px' }}>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <div className="nav-close-container">
            <div className="nav-close" onClick={handleNavCloseClick}>
              X
            </div>
          </div>
        </ul>
      )}
      <header>
        <ul className="main-nav">
          <li className="name">Website Title / Logo</li>
          <li className="item">Item 1</li>
          <li className="item">Item 2</li>
          <li className="item">Item 3</li>
          <li className="item">Item 4</li>
        </ul>
      </header>
    </nav>
  );
}

export default NavigationBar;
