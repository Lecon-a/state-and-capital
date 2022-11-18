import React from 'react';

function Contact(props) {
    const { state, capital } = props.item;
    return (
        <div className='address--card'>
            { state && <h3>State: {state.charAt(0).toUpperCase() + state.substring(1, state.length)}</h3>}
            {capital && <p>Capital: { capital.charAt(0).toUpperCase() + capital.substring(1, capital.length)}</p>}
            <hr />
        </div>
    )
}

export default Contact;