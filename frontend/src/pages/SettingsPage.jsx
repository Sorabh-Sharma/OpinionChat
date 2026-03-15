import React from 'react'

const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        <div className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Theme</span>
            </label>
            <select className="select select-bordered">
              <option>Light</option>
              <option>Dark</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Notifications</span>
            </label>
            <input type="checkbox" className="toggle toggle-primary" />
          </div>
          <button className="btn btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage
