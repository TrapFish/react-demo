import React from "react";
import {CORE_CONCEPTS} from './data';
import DisplayCard from '../../modules/DisplayCard/DisplayCard';

export default function DataRepresent(){
    return (
        <>
          {CORE_CONCEPTS.map((value, index)=> {
            return (
                <>
                  <DisplayCard {...value}/>
                </>
            )
          })}
        </>
    )
}