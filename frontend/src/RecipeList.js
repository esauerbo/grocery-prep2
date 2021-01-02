import './css/RecipeList.css';
import { Link } from 'react-router-dom'
import React from 'react';

const url = 'http://localhost:5000/api/recipe'



class RecipeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        fetch(url)
        .then(res => res.json())
        .then(data => this.setState({ list: data }));

        document.title = 'Grocery Prep';
    }
render() {
    return (
        <main>
        <h1>Welcome to Grocery Prep!</h1>
        <p></p>
        <p>This is your one stop shop for all things grocery and meal planning related.</p>
        <p>Feel free to check out some of the recipes below. I hope you enjoy!</p> 
        <h1>Chip Dips</h1>
        <div className="flex-container">
                    <div id="RecipeLinks">
                            {this.state.foodList && this.state.foodList.map(foodItem => {
                                const title = foodItem.title;
                                const id = foodItem._id;
                                return (
                                <Link to={'/recipe/#' + id}>{title}</Link>
                                )
                            })}
                    </div>
        <ul>
        <div id="salsacolumn"><br/></div>
        <div id="guaccolumn"><br/></div>
        <div id="quesocolumn"><br/></div>
        </ul>
        </div>
    </main>
    );
  }
}
  export default RecipeList;