import React from 'react';

export default function DisplayCard({ title, image, description }) {
    return (
        <>
            <div class="card-data">
                <img src={image} alt={title} className='image-alt'/>
                    <div class="container">
                        <h4><b>{title}</b></h4>
                        <p>{description}</p>
                    </div>
            </div>
        </>
    )
}