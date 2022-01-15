import React from 'react';
const RecipesList = props => (
    <div>
        {(props.listOfRecipes).recipes.map((recipe) => {
            const nameToLower = ((recipe.name).toString()).toLowerCase();
            console.log(nameToLower);
            const searchToLower = (((props.searchedRecipe).toString()).toLowerCase());
            console.log(searchToLower);
            console.log((nameToLower).includes(searchToLower));
            if ((nameToLower).includes(searchToLower)) {
                return <p key={recipe.id}>{recipe.name}</p>
            }
        })}
    </div>
);

export default RecipesList;