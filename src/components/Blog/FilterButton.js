import React from 'react';

const FilterButton = ({ getRecipeByFilter }) => {


    return (
        <div className="dropdown container-fluid">
            <button className="form-control dropdown-toggle rounded-0 shadow-sm" type="button"
                id="recipeFiltrationButton" data-bs-toggle="dropdown" aria-expanded="false">
                Filter
            </button>
            <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="recipeFiltrationButton">

                <li key="mostPopular"
                    onClick={() => getRecipeByFilter("mostPopular")}>
                    <a className="dropdown-item">
                        Most popular
                    </a>
                </li>

                <li key="recent"
                    onClick={() => getRecipeByFilter("recent")}>
                    <a className="dropdown-item">
                        Most recent
                    </a>
                </li>
                <li key="xmas"
                    onClick={() => getRecipeByFilter("xmas")}>
                    <a className="dropdown-item">
                        Christmas Recipes
                    </a>
                </li>
                <li key="easter"
                    onClick={() => getRecipeByFilter("easter")}>
                    <a className="dropdown-item">
                        Easter Recipes
                    </a>
                </li>
                <li key="halloween"
                    onClick={() => getRecipeByFilter("halloween")}>
                    <a className="dropdown-item">
                        Halloween Recipes
                    </a>
                </li>

            </ul>
        </div>

    )
}

export default FilterButton