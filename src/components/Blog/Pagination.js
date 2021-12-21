import React from 'react';

const Pagination = ({ recipesPerPage, totalRecipes,paginate,curPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className={number==curPage ? "page-item active": "page-item" }>
                        <a 
                        onClick={paginate} href={"/recipes/page="+number} 
                        className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>

    )
}

export default Pagination