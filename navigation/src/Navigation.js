import React from 'react';
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="nav__wrapper">
      <div className="menu__wrap">
        <input type="checkbox" className = "toggle__class"/>

        <div className="hamburger">
          <div></div>
        </div>

        <div className="menu">
          <div>
            <div>
              <ul className = "list">
                <li className = "list__item"><a href="#">Home</a></li>
                <li className = "list__item"><a href="#">About</a></li>
                <li className = "list__item"><a href="#">Contact Us</a></li>
                <li className = "list__item"><a href="#">Skills</a></li>
                <li className = "list__item"><a href="#">Resume</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div> {/* .menu__wrapper */}

      <header className = "showcase">
        <div className="container showcase__inner">
          <h3>Welcome</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sapiente eum eos corrupti repellendus quo, praesentium in sequi perspiciatis saepe neque, ipsam, laudantium nisi cumque minus doloribus voluptatibus asperiores cum.</p>
          <a href="#" className="btn">Read More</a>
        </div>
      </header>

    </div>
  );
}

export default Navigation;