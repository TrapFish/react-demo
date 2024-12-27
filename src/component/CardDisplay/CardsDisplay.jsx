import React from "react";
import Card from './Card';

function CardsDisplay(){
    return (
        <>
          Card Display

          <h1>Available Experts</h1>
      <Card name="Kumar Gourav">
        <p>
          Kumar Gourav is a professor of Computer Science at the University of
          Illinois.
        </p>
        <p>
          <a href="gourav3492@gmail.com">Email Anthony</a>
        </p>
      </Card>

      <Card name="Kumari Puja Sinha">
        <p>
          Kumari Puja Sinha is a professor of Computer Science at the University of
          Illinois.
        </p>
        <p>
          <a href="micky.sinha28@gmail.com">Email Maria</a>
        </p>
      </Card>
        </>
    )
}

export default CardsDisplay