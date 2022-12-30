import React from 'react';

export default function Header({ darkMode, onDarkMode }) {

    return (
        <header>
            <nav style={{ backgroundColor: darkMode ? '#444' : '#eee', color: darkMode? '#eee' : '#444' }}>
                <p className='brand'>SPa Image Generator | Controlled Input</p>
                <div className='toggle' style={{ backgroundColor: darkMode? '#eee' : '#444' }}><div className='toggle--ball' onClick={onDarkMode} style={{ float: darkMode ? 'right' : 'left', backgroundColor: darkMode? '#444' : '#eee' }}></div></div>
            </nav>
        </header>
    );
}