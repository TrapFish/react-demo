import React from 'react';

export default function Button({value, selectOption}){
    return (
        <>
          <button className='button-style' onClick={selectOption}>{value.toUpperCase()}</button>
        </>
    )
}