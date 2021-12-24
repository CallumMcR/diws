import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import ReactToPrint from "react-to-print";

export default function PrintComponent(data) {
  let componentRef = useRef(data);
  const recipeData = JSON.stringify(data);
  localStorage.setItem("printData", recipeData)
  return (
    <>
      <div id="print_component">
        {/* button to trigger printing of target component */}
        <ReactToPrint
          trigger={() => <Button>Print this out!</Button>}
          content={() => componentRef}
        />

        {/* component to be printed */}
        <div style={{ display: "none" }}>
          <ComponentToPrint ref={(el) => (componentRef = el)} />
        </div>
      </div>
    </>
  );
}

// component to be printed
class ComponentToPrint extends React.Component {
  state = {
    recipeData: []
  }
  componentDidMount = async() => {
    const data = localStorage.getItem("printData")
    if (data) {
      const parsedData = JSON.parse(data);
      this.setState({ recipeData: parsedData.data })     
    }
  }



  render() {
    return (
      <div>
        <h2 style={{ color: "green" }}>{this.state.recipeData.recipesName}</h2>
        {this.state.recipeData.recipesYield}

      </div>
    );
  }
}