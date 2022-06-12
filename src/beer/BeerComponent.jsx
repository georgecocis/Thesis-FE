import React from "react";
import { useNavigate } from "react-router-dom";

const BeerComponent = ({ beer1 }) => {
  
  const navigate = useNavigate();

  const routeToBeerDetails = () => {
    navigate("/beer");
  }

    return (
      <>
        <div
        className='beer'
        onClick = {() => {
          routeToBeerDetails();
        }}>
        <div>
          <p>{ beer1.name }</p>
        </div>

        <div>
          <img src={beer1.picture} alt={'Beer has no picture'} />
        </div>

        <div>
          <p>{ beer1.brewer }</p>
          <p>{ beer1.type }</p>
        </div>
      </div>
    </>
    );
}

export default BeerComponent;