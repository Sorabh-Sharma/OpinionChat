import React from 'react'
import { useAuthStore } from '../Store/useAuthStore';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { authUser } = useAuthStore();
  return (
    <div>
      navbar 
    </div>
  )
}

export default Navbar
