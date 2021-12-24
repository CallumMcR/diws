import React, { useRef } from 'react';
import { render } from "react-dom";
import { useReactToPrint } from 'react-to-print';
import { useLocation } from "react-router-dom";
import PrintComponent from "./PrintComponent.js";



function PrintRecipe(props) {

    const {state } = useLocation();
    console.log(state)
    return (
        <div>
            <PrintComponent />
            <h2 style={{ color: "green" }}>Attendance</h2>
            <div>
                asdas
            </div>
        </div>
    );

}

export default PrintRecipe 