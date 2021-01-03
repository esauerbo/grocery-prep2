import '../css/Recipelist.css';
import { Link } from 'react-router-dom'
import React from 'react'

const url = 'http://localhost:3004/api/recipe/'

class Recipelist extends React.Component {
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
    <div id='recipe-list'>
    <h1>Welcome to Grocery Prep</h1>
    <p>Your one stop shop for all things grocery and meal planning
        related</p>
    <p>Feel free to check out some of the recipes below. I hope you
        enjoy!</p>
    <h1>Chip Dips</h1>
    <h2>Recipes</h2>
                <div className='recipes'>
                    {this.state.list && this.state.list.map(item => {
                        const id = item._id;
                        const title = item.title;
                        console.log("recipelist "+ id + " " + title);
                        return <Link to={'/recipe/#' + id}>{title}</Link>;
                    })}
                </div>
    <div class="flex-container">
    <ul>
    <div id="salsacolumn"><br/></div>
    <div id="guaccolumn"><br/></div>
    <div id="quesocolumn"><br/></div>
    </ul>
    </div>
</div>
  );
}
}

export default Recipelist;