import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../logo.jpg';
import PopupForm from './ambulance-form';
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebaseConfig';
import { onAuthStateChanged, signOut, getAuth } from 'firebase/auth';
import { db } from './firebaseConfig';
import { doc, getDoc, updateDoc, serverTimestamp} from 'firebase/firestore';


const Navbar = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);
    const openLoginForm = () => setIsLoginOpen(true);
    const closeLoginForm = () => setIsLoginOpen(false);

    const handlePostView = () => {
        if (!user) {
            openLoginForm();
        } else {
            navigate('/PostView', { replace: true });
        }
    };

    const handleLogout = async () => {
        const auth = getAuth();
        try {
            await signOut(auth);
            alert("Logout successful");
        } catch (error) {
            console.error("Logout Failed: ", error.message);
        }
    };

    return (
        <>
            <div className='sticky'>
                <div className='navbar'>
                    <div className='navbar-logo ms-3'>
                        <img src={logo} alt='Logo' />
                        <h2>Hospital Recommendation System</h2>
                    </div>

                    <div className='nav-link'>
                        <nav>
                            <ul>
                                <li>
                                    <button style={{ borderRadius: '7px' }} onClick={openPopup}>
                                        <b>BOOK AN AMBULANCE</b>
                                    </button>
                                </li>
                                <li>
                                    <button style={{ borderRadius: '7px' }} onClick={handlePostView}>
                                        <b>POST A VIEW</b>
                                    </button>
                                </li>

                                {/* User Authentication Dropdown */}
                                {user ? (
                                    <li className='dropdown'>
                                        <button className='primary' style={{ padding: '12px 15px' }}>
                                            {user.email} ⬇
                                        </button>
                                        <div className='dropdown-content'>
                                            <button className='btn btn-primary' onClick={handleLogout}>
                                                Logout
                                            </button>
                                        </div>
                                    </li>
                                ) : (
                                    <li>
                                        <button style={{ borderRadius: '7px', marginRight: '10px' }} onClick={openLoginForm}>
                                            <b>LOGIN</b>
                                        </button>
                                    </li>
                                )}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Popup and Login Form */}
            {isPopupOpen && <PopupForm isOpen={isPopupOpen} onClose={closePopup} />}
            {isLoginOpen && <LoginForm isOpen={isLoginOpen} onClose={closeLoginForm} setUser={setUser} />}
        </>
    );
};

export default Navbar;
