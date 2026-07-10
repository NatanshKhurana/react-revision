import React from 'react'
import UserContext from '../utils/UserContext';
import { useContext } from 'react';

const About = () => {
  const userData = useContext(UserContext);
  return (
    <div>
      <h1>This is About Section !</h1>
      <h1 className='font-bold text-4xl'>{userData.loggedInUser}</h1>
      <h2>I'm revising React from Namaste React !!</h2>
    </div>
  )
}

export default About;
