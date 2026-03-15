import React from 'react'

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="input input-bordered w-full" />
          <input type="password" placeholder="Password" className="input input-bordered w-full" />
          <button type="submit" className="btn btn-primary w-full">Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
