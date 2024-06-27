import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import NewsList from '../components/NewsList'
import NewsDetail from '../components/NewsDetail'

const News = () => {
  return (
    <div>
      <h1>News</h1>
      <nav>
        <Link to="/news">All News</Link>
      </nav>
      <Routes>
        <Route path="/" element={<NewsList />} />
        <Route path="/:id" element={<NewsDetail />} />
      </Routes>
    </div>
  )
}

export default News