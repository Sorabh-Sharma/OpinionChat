import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'
import { useAuthStore } from './Store/useAuthStore'
import { useEffect } from 'react'
import { Loader } from 'lucide-react';

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore()
  useEffect(() => {checkAuth()}, [checkAuth]);
  console.log("authUser in App.jsx", authUser);

  if(isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    )
  }

  return (

    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={authUser?<HomePage/>:<Navigate to="/login"/>} />
        <Route path="/login" element={!authUser?<LoginPage/>:<Navigate to="/"/>} />
        <Route path="/signup" element={!authUser?<SignupPage/>:<Navigate to="/"/>} />
        <Route path="/profile" element={authUser?<ProfilePage/>:<Navigate to="/login"/>} />
        <Route path="/settings" element={authUser?<SettingsPage/>:<Navigate to="/login"/>} />
      </Routes>
    </div>
  )
}

export default App
