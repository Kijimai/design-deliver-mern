import React from 'react'

const UserLogin = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="email">Email: </label>
        <input type="text" id="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password: </label>
        <input type="text" />
      </div>
    </form>
  )
}

export default UserLogin