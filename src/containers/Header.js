import React from 'react';
import shoppingBag from './shopping_bag.png';

const Header = () => (
  <>
    <div className="ui fixed row menu">
      <div className="ui container center logo">
        <h2>Shop Moiwa</h2>
      </div>
    </div>

    <div className="head_main_container">
      <div className="shopping_bag_div">
        <img src={shoppingBag} alt="back" className="shopping_bag" />
      </div>

      <div className="head_text">
        <p className="header_text">
          welcome to shop moiwa, do your online shopping here
        </p>
      </div>
    </div>

  </>
);

export default Header;
