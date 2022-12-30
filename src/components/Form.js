import React from 'react';

export default function Form(props) {

    const { formData, setFormData, darkMode } = props;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [ name ]: value
            }
        })
    }

    const handleImageGeneration = (e) => {
        e.preventDefault();
        const imageIndex = Math.floor(Math.random() * 152);
        const imageChosen = imageIndex <= 152 ? `image (${imageIndex}).jpg` : 'image (1).jpg';
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                image: imageChosen
            }
        })
    }

    return (
        <div className='form--container' style={{backgroundColor: darkMode? '' : '#ddd'}}>
            <form>
                <div className='form--div'>
                    {/* <label htmlFor='topText'>Top Text</label> */}
                    <input
                        className='topText--inputField'
                        type='text'
                        placeholder='Type Top Text Here'
                        autoFocus
                        name='topText'
                        value={formData.topText}
                        onChange={handleChange}
                    />
                    {/* <label htmlFor='bottomText'>Bottom Text</label> */}
                    <input
                        className='bottomText--inputField'
                        type='text'
                        placeholder='Type Bottom Text Here'
                        name='bottomText'
                        value={formData.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <div className='form--div'>
                    {/* <label htmlFor='favouriteColor'>Text Color</label> */}
                    <select
                        className='textColor--inputField'
                        value={formData.textColor}
                        onChange={handleChange}
                        name='textColor'
                    >
                        <option value=''>-- Choose --</option>
                        <option value='white'>White</option>
                        <option value='green'>Green</option>
                        <option value='black'>Black</option>
                        <option value='brown'>Brown</option>
                        <option value='blue'>Blue</option>
                        <option value='red'>Red</option>
                    </select>
                    <button
                        className='btn--gen--image'
                        onClick={handleImageGeneration}
                    >
                        Generate Image
                    </button>
                </div>
            </form>
        </div>
    );
}