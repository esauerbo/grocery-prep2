import '../css/Recipelist.css';
import { Link } from 'react-router-dom'




function Recipelist() {
  return (
    <div id='recipe-list'>
    <h1>Welcome to Grocery Prep</h1>
    <p>Your one stop shop for all things grocery and meal planning
        related</p>
    <p>Feel free to check out some of the recipes below. I hope you
        enjoy!</p>

    <h2>Recipes</h2>
    <div className='link-collection'>
    <p>Links go here</p>
    </div>
    <div class="flex-container">
    <h1>Chip Dips</h1>
    <ul>
    <div id="salsacolumn"><br/></div>
    <div id="guaccolumn"><br/></div>
    <div id="quesocolumn"><br/></div>
    </ul>
    </div>
</div>
  );
}

export default Recipelist;