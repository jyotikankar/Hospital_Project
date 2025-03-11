import React from 'react';
import './ambulance-form.css';

const PopupForm =({ isOpen, onClose}) => {
    if (!isOpen) return null;
    return(
        <div className='popup-overlay'>
            <div className='popup-form'>
                <span className='close-btn' onClick={onClose}>
                    &times;
                </span>
                <h2 className='text-center'>Book An Ambulance</h2>
                <h4 className='text-center'> Get a call in just 2 minutes</h4>
                <form>
                    <input type="text" placeholder="Full Name" required className="form-input"/>
                    <input type="text" placeholder="Mobile Number" required className="form-input"/>
                    <input type="text" placeholder="Location" required className="form-input"/>

                    <button type="submit" className="btn btn-danger w-100">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};


export default PopupForm;