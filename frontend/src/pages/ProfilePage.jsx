import React from 'react'
import { useAuthStore } from '../Store/useAuthStore';
const ProfilePage = () => {
  const { authUser } = useAuthStore();
  return (
    <div>
      Profile Page
    </div>
  )
}

export default ProfilePage
