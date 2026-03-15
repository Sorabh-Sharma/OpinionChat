import React from 'react'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-white mb-4">Welcome to Chat App</h1>
        <p className="text-xl text-blue-100 mb-8">Connect with friends and stay updated</p>
        <button className="btn btn-primary btn-lg">Get Started</button>
      </div>
    </div>
  )
}

export default HomePage
