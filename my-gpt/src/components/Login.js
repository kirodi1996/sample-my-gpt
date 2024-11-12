import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { PHOTO_URL } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null)
 
  // Create ref of input elements
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    // Validate the form data
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const message = checkValidData(emailValue, passwordValue);
    setErrorMessage(message);
    if (message) return;
    
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PHOTO_URL
          }).then(() => {
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({uid, email, displayName, photoURL}))
          }).catch((error) => {
            setErrorMessage(error.message)
          });
        })
        .catch(() => {
        });
    } else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
      .then(() => {
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
    }
    
  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />
      <form onSubmit={(e) => e.preventDefault()} className='w-4/12 p-6 bg-black mx-auto right-0 left-0 my-12 text-white rounded-lg bg-opacity-80'>
        
        <h1 className='font-bold text-3xl py-4'>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        
        {
          !isSignInForm && (
          <input ref={name} type="text" placeholder='Full name' className='p-4 my-4 w-full bg-gray-700'/>
        )}
        
        <input ref={email} type="text" placeholder='Email' className='p-4 my-4 w-full bg-gray-700' />
        
        <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />
        <p className='text-red-600 font-bold text-lg py-2'>
          {errorMessage}
        </p>
        <button onClick={handleButtonClick} className='p-4 my-6 font-bold  bg-red-700 w-full'>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}> 
          { isSignInForm ? "New to netflix? Sign up now" : "Already a user?" }
        </p> 
      </form>
    </div>
  )
}

export default Login
