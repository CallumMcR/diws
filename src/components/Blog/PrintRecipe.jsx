import React, { useRef } from 'react';
import { render } from "react-dom";
import { useReactToPrint } from 'react-to-print';
import { useLocation } from "react-router-dom";
import PrintComponent from "./PrintComponent.js";



function PrintRecipe(props) {

    const location = useLocation();
    
    return (
        <div>
            <PrintComponent
            data={location.state} />
            <h2 style={{ color: "green" }}>Attendance</h2>
            <div>
                {location.state.recipesName}
            </div>
        </div>
    );

}

export default PrintRecipe 