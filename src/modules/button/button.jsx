import React from 'react';

export default function Button({value, selectOption, isSelected}){
    return (
        <>
          <button className={`button-style ${isSelected ? 'active' : ''}`} onClick={selectOption}>{value.toUpperCase()}</button>
        </>
    )
}