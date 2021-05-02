import React from 'react'
// import NavBarButton from './NavBarButton';

const NavBar = () => {
    
        // each item should have an unique key
        const updatedList = menuItems.map((item, index) => {
          return <li>{item}</li>;
        });
        // note that React needs to have a single Parent
        return <ul style={{ listStyleType: "none" }}>{updatedList}</ul>;
      }
      const menuItems = [1, 2, 3, 4, 5];


export default NavBar




