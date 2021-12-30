import React from "react";
import contactImage from './contactusimage.png';

function Contact() {
  return (
    <div className="contact">
      <div className="container-fluid p-0" style={{
        height: "16rem", position: "relative", width: "auto"
        
      }}>

        <div className="container-fluid text-light"
          style={{ position: "relative", top: "0", left: "0", right: "0" }}
        >
          <div className="row" style={{ color: "#ff80c4",backgroundColor: "rgba(255,255,128,0.4)"  }}>
            <div className="col-2" style={{ color: "#ff80c4"  }}>

            </div>
            <div className="col-lg-5 fs-1 fw-bold pt-5" style={{ color: "#ff80c4"  }}>
              Get in touch
              <div className="fs-5 fw-light pt-3" style={{ color: "#ff80c4" }}>
                Want to get in touch? Whether its for a query, or a business proposal
                <br></br> Find out how to contact us below
              </div>

            </div>
            <div className="col-lg-5 p-0" >
              <img className="img-fluid float-end" src={contactImage} style={{height:"16rem"}}></img>
            </div>
          </div>



        </div>




      </div>
    </div>

  );
}

export default Contact;