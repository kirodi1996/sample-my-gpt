import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { HEADER_LOGO_URL } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView())
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid, email, displayName, photoURL}))
        navigate('/browse');
      } else {
        dispatch(removeUser())
        navigate('/');
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, [])

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch(() => {
      navigate('/error')
    });
    
  };
  return (
    <div className='flex justify-between w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img src={HEADER_LOGO_URL} alt="logo"/>
      {user && (
        <div className='flex p-2'>
          <button onClick={handleGptSearchClick} 
            className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg'
          >{showGptSearch ? "Home page" : "GPT Search"} </button>
          <img 
          className = "w-12 h-12"
           alt="avatar" 
           src={user?.photoURL} />
          <button onClick={handleSignOut}>Sign out</button>
      </div>
    )}
    </div>
  )
}

export default Header
