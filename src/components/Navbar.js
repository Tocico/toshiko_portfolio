import React ,{useState} from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import  styles from '../styles/nav-bar.module.scss'


function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const menuActive = showMenu ? `${styles.open}` : '';
    const triggerActive = showMenu ? `${styles.open}` : '';
    const arrowActive = showMenu ? `${styles.active}` : '';
  return (
      
    <header>
      <div className={styles.logo}>
        <a href="/">
          <img src="./images/logo.png" alt="Toshikos logo" />
        </a>
      </div>
      <div className="wrapper">
      <div className={`${styles.menuTrigger} ${triggerActive} ${arrowActive}`} onClick={()=> setShowMenu(!showMenu)}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <nav className={`${menuActive}`}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/work">Work</NavLink>
              </li>
              <li>
                <NavLink to="/skill">Skills</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
        </nav>
         <div className="overlay"></div>
      </div>
    </header>
  );
};

export default withRouter(Navbar);
