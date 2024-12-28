import React, {useState} from "react";
import Card from './Card';
import Button from '../../modules/button/button';
import {LISTDISPLAY, EXAMPLES} from './example';

function CardsDisplay() {
  const [reactValue, setReactValue] = useState("");

  const handleSelectOption = (optionClicked) => {
    setReactValue(optionClicked);
  }

  console.log("Line 13::", EXAMPLES )
  return (
    <>
      <div>
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
      </div>
      <div>
        <section>
        <menu> 
            {LISTDISPLAY.map((value, index) => {
              return (
                <Button key={value} isSelected={reactValue === value} value={value} selectOption={()=>handleSelectOption(value)} />
              )
            })}
            <div>
              {!Object.keys(EXAMPLES).includes(reactValue) && (
                <>
                  <h2>Please select the options to view the result</h2>
                </>
              )}
              {Object.keys(EXAMPLES).includes(reactValue) && (
                <>
                  <div className="section-build">
                    <h1>{EXAMPLES[reactValue].title}</h1>
                    <p>{EXAMPLES[reactValue].description}</p>
                    <code>
                        {EXAMPLES[reactValue].code}
                    </code>
                  </div>
                  
                </>
              )}
              {/* {EXAMPLES.map((exampleMap, index)=>{
                return (
                 <>
                   {exampleMap[reactValue] && (
                    <>
                       <h1>{exampleMap[reactValue].title}</h1>
                       <p>{exampleMap[reactValue].description}</p>
                    </>
                   )}
                 </>
                )
              })} */}
            </div>
          </menu>
        </section>
      </div>
    </>
  )
}

export default CardsDisplay