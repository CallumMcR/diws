import React, { useEffect } from "react";
import { useParams } from "react-router";


class Recipe extends React.Component {

  state = {
    activeRecipe: []
  }

  componentDidMount = async () => {
    const idNum = (this.props.params).uuid;
    const req = await fetch(`https://get-baking-recipes-api.free.beeceptor.com/recipes`);
    const res = await req.json();
    res.recipes.forEach((displayRecipe) => {
      if (displayRecipe.id == idNum) {
        this.setState({ activeRecipe: displayRecipe });
      }
    });

  }



  render() {
    return (
      <div className="home">
        
      </div>
    );
  }
}


export default (props) => (
  <Recipe
    {...props}
    params={useParams()} />
);