import React from 'react';


const Pagination = ({ recipesPerPage, totalRecipes, paginate, curPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="pagination justify-content-start">
                {curPage !== 1 ?
                    <li className="page-item">
                        <button onClick={() => paginate(curPage - 1)}
                            className="page-link rounded-start">
                            Previous

                        </button>
                    </li> :
                    <li className="page-item">
                        <button
                            className="page-link rounded-start" disabled style={{ opacity: 0.6 }}>
                            Previous

                        </button>
                    </li>}


                <li className="page-item active">
                    <button onClick={() => paginate(curPage-1)}
                        className="page-link active">
                        {curPage}

                    </button>
                </li>


                {typeof pageNumbers[curPage] !== 'undefined' ?
                    <li className="page-item">
                        <button onClick={() => paginate(curPage + 1)}
                            className="page-link">
                            {curPage+1}

                        </button>
                    </li> :
                    <li className="page-item">
                        <button
                            className="page-link" disabled style={{ opacity: 0.6 }}>
                            {curPage+1}

                        </button>
                    </li>}

                {typeof pageNumbers[curPage + 1] !== 'undefined' ?
                    <li className="page-item">
                        <button onClick={() => paginate(curPage + 2)}
                            className="page-link ">
                            {curPage + 2}

                        </button>
                    </li> :
                    <li className="page-item">
                        <button
                            className="page-link " disabled style={{ opacity: 0.6 }}>
                            {curPage + 2}

                        </button>
                    </li>}




                {typeof pageNumbers[curPage] !== 'undefined' ?
                    <li className="page-item">
                        <button onClick={() => paginate(curPage + 1)}
                            className="page-link rounded-end">
                            Next

                        </button>
                    </li> :
                    <li className="page-item">
                        <button
                            className="page-link rounded-end" disabled style={{ opacity: 0.6 }}>
                            Next

                        </button>
                    </li>}
            </ul>
        </nav>

    )
}

export default Pagination