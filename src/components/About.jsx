import React from "react";
import { ReactComponent as Logo } from './getBakingLogo.svg';
function About() {
  return (
    <div className="about">
      <div className="container-fluid" style={{ backgroundColor: "white" }}>
        <div className="container-fluid p-5" style={{
          borderRadius: "15px"
        }}>

          <div className="d-sm-flex row">
            <div className="col-lg-9 px-5">

                <h1 className="pb-3 text-decoration-underline">Get Baking</h1>
                <p className="fs-5 text-start">
                  We are a small group of people who have a passion and love for food,
                  with my grandparents originally founding a little baking store with the name of Get Baking, I then
                  took it over and have recently decided to move to an online platform where I can spread the love of my
                  food, as well as allow everyone, and anyone to taste and experience
                  the delightful recipes my grandparents managed to develop, as well as share our families recipes that have
                  been exclusive to this family for generations!
                </p>
                <div className="row d-flex fs-5 py-5">
                  Get Baking strives to provide you with a unique taste in your mouth that you will find no where else!
                  Ranging from seasonal recipes to our families very own traditional recipes, originating from our roots
                  all the way back in the year of 1547 when our family began baking! With a plethora of experience under our
                  hands, we aim to bring you the best recipes we have generated over years of experience, giving you
                  the best family dining experience. We have, and always strive to bring the most mouth watering recipes to our website,
                  so you, and anyone you share us with is able to relish the taste too.
                </div>
                
          
            </div>
            <div className="col-lg-3 border rounded p-2 text-center" style={{ backgroundColor: "#ffff80" }}>

              <Logo className="img-fluid" style={{ width: "60%" }} />

              <h1>Why get Baking?</h1>
              <p className="fs-5 text-center">
                Founded in 1985 by my grandparents, then taken over by me in 2005, I decided to
                continue to spread
                their love of food, reaching further out, allowing for the world to taste and experience their amazing
                recipes!
              </p>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;