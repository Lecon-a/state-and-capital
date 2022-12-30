import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import Header from './components/Header';
import Form from './components/Form';
import ImageCard from './components/ImageCard';
import Print from './components/Print';

function App() {
    
    const componentRef = useRef();
    const [isToggleBallPosition, setIsToggleBallPostion] = React.useState(false);

    const handleDarkMode = () => {
        setIsToggleBallPostion(prevIsToggleBallPosition => !prevIsToggleBallPosition)
    }

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'SPa_Image_Generated',
        onAfterPrint: () => alert('Printed successfully!')
    });

    const [formData, setFormData] = React.useState({
        topText: '',
        bottomText: '',
        textColor: '',
        image: 'image (1).jpg'
    });

    return (
        <div className='major--container'>
            <Header
                darkMode={isToggleBallPosition}
                onDarkMode={handleDarkMode}
            />
            <div className='section' style={{ backgroundColor: isToggleBallPosition ? '#444' : '', color: isToggleBallPosition? '#eee' : ''}}>
                <ImageCard
                    componentRef={componentRef}
                    formData={formData}
                />

                <Form
                    formData={formData}
                    setFormData={setFormData}
                    darkMode={isToggleBallPosition}
                />

                <Print onPrint={ handlePrint } />
                
            </div>
        </div>
    )
}

export default App;