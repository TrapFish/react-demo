import React from 'react';

export default function DisplayCard({ title, image, description }) {
    return (
        <>
            <div className="card-data">
                <img src={image} alt={title} className='image-alt'/>
                    <div className="container">
                        <h4><b>{title}</b></h4>
                        <p>{description}</p>
                    </div>
            </div>
        </>
    )
}