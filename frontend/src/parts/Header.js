import '../css/Header.css';
import { Link } from 'react-router-dom'

function Header() {
  return (

<div class="container">
  <div id="home-image"></div>
  <div class="bg-text">
    <header>
        <h1 >Grocery Prep</h1>
        <div class="nav">
          <ul>
               <Link to="/"> Home </Link>
               <Link to="/random"> Random Recipe </Link>
               <Link to="/about"> About the Chef </Link>
          </ul>
        </div>
        </header>
        </div>
        </div>

      

  


  );
}

export default Header;