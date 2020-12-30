import './css/Home.css';
import { Link } from 'react-router-dom'

function Home() {
    return (
        <main>
        <h1>Welcome to Grocery Prep!</h1>
        <p></p>
        <p>This is your one stop shop for all things grocery and meal planning related.</p>
        <p>Feel free to check out some of the recipes below. I hope you enjoy!</p> 
        <h1>Recipes</h1>
        <div class="flex-container">
        <div id="chipheader">
            <h2>Chip Dips</h2></div>
        <ul>
        <div id="salsacolumn"><Link to="recipes/salsa.html"> Salsa </Link><br/></div>
        <div id="guaccolumn"><Link to="recipes/guac.html">Guacamole</Link><br/></div>
        <div id="quesocolumn"><Link to="recipes/queso.html">Queso</Link><br/></div>
      </ul>
      </div>
    </main>
    );
  }
  export default Home;