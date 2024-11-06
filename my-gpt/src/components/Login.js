import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />
      <form className='w-4/12 p-6 bg-black mx-auto right-0 left-0 my-12 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (<input type="text" placeholder='Full name' className='p-4 my-4 w-full bg-gray-700'/>)}
        <input type="text" placeholder='Email' className='p-4 my-4 w-full bg-gray-700' />
        <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />
        <button className='p-4 my-6 font-bold  bg-red-700 w-full'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}> 
          { isSignInForm ? "New to netflix? Sign up now" : "Already a user?" }
        </p> 
      </form>
    </div>
  )
}

export default Login
