import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import UserList from '../components/UserList'
import UserDetail from '../components/UserDetail'
import CreateUser from '../components/CreateUser'

const Users = () => {
  return (
    <div>
      <h1>Users</h1>
      <nav>
        <Link to="/users">List</Link> | 
        <Link to="/users/create">Create</Link>
      </nav>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/:id" element={<UserDetail />} />
      </Routes>
    </div>
  )
}

export default Users