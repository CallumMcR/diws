import React, { useRef } from 'react';
import { render } from "react-dom";
import { useReactToPrint } from 'react-to-print';
import PrintComponent from "./PrintComponent.js";



class PrintRecipe extends React.Component {
    render() {
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
}

export default PrintRecipe 