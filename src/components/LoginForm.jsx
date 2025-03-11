import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebaseConfig";
import './LoginForm.css';
import logo from '../logo.jpg';
import Create from './create_new_account';
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";


const LoginForm = ({ isOpen, onClose, setUser }) => {
    const [isCreateOpen, setCreateOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    if (!isOpen) return null;

    const handleLogin = async (event) => {
        event.preventDefault(); // Prevent page reload
      
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          
          // Ensure the user document exists in Firestore
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (!userDoc.exists()) {
            console.error("User document does not exist in Firestore");
            setError("User not found in database.");
            return;
          }
      
          console.log("Login Successful:", user);
          setUser(user); // Store user in parent component
      
          onClose(); // Close login form on success
        } catch (error) {
          console.error("Login Failed:", error.message);
          setError("Invalid email or password.");
        }
      };
      

    return (
        <>
            <div className='Login-overlay'>
                <div className='Login-form'>
                    <span className='close-btn' onClick={onClose}>&times;</span>
                    <div className='formhead'>
                        <img src={logo} alt="Logo" />
                        <h2>User Login</h2>
                    </div>

                    {error && <p className="error-message">{error}</p>}

                    <form onSubmit={handleLogin}>
                        <input 
                            type="text" 
                            placeholder="Email" 
                            required 
                            className="form-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            required 
                            className="form-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                        <button type="button" className="btn border w-100 mt-3" onClick={() => setCreateOpen(true)}>
                            Create A New Account
                        </button>
                    </form>
                </div>
            </div>

            {/* Register Form popup */}
            {isCreateOpen && <Create isOpen={isCreateOpen} onClose={() => setCreateOpen(false)} />}
        </>
    );
};

export default LoginForm;
