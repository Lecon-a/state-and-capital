import React from 'react';

export default function Print({ onPrint }) {

    return (
        <div className='print--section'>
            <button className='print--btn' onClick={ onPrint }>Print</button>
        </div>
    )
}