import React from 'react';
import Contact from './components/Contact';
import Address from './AddressData';

function App() {
    const addressElement = Address.map((item, index) => {
        return <Contact
            key={index}
            // {...item} <= object spreading technique
            item={item}
        />
    });

    return (
        <div>
            <header>
                <nav>
                    <img src='../images/app.jpg' alt='brand logo' />
                    <h1>State and Capital</h1>
                </nav>
            </header>
            <section className='section--address'>
                {addressElement}
            </section>
        </div>
    )
}

export default App;