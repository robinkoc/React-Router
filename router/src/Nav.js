
import { NavLink } from 'react-router-dom';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  const navStyle = {
      color: 'black'
  };  
  return (
    <nav>
        <h3>Logo</h3>
        <ul className="NavLinks">
            <Link style={navStyle} to='/about'>
                <li>About</li>
            </Link>
            <Link style={navStyle} to='/shop'>
                <li>Shop</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
