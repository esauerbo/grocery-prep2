import React from 'react'
import '../css/Recipe.css'

const url = 'http://localhost:3004/api/recipe/'

class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const id = window.location.hash.substr(1);
        fetch(url + id)
        .then(res => res.json())
        .then(recipe => {
            this.setState({...recipe});
          //  let rating = recipe.ratings.reduce((a, b) => a + b) / recipe.ratings.length;
           // rating = rating.toFixed(2);
           // this.setState({rating: rating});
            document.title = recipe.title + ' - Grocery Prep';
        });
    }


    render(){
        return (
            <section>
                <h1> {this.state.title} </h1>
                    <h3>Servings</h3>
      
                 </section> 
        )
    }

}


 export default Recipe;