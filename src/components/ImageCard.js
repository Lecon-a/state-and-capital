import React from 'react';

export default function ImageCard(props) {

    const { topText, bottomText, textColor, image } = props.formData;
    return (
        <div className='card' ref={ props.componentRef }>
            <img className='card--image' src={`./images/${image}`} alt='card' />
            <h2 className='card--text card--top--text' style={{color: textColor}}>{ topText }</h2>
            <h4 className='card--text card--bottom--text' style={{color: textColor}}>{ bottomText }</h4>
        </div>
    )
}