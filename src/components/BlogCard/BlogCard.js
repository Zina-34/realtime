import React from 'react'
import { Link } from 'react-router-dom'
import './BlogCard.scss'

const BlogCard = () => {
  return (
    <div className='col-3'>
      <div className='blog-card'>
        <div className='card-image'>
            <img src='image/blog-1.jpg' className='img-fluid' alt='blog'/>
        </div>
        <div className='blog-content'>
            <p className='date'>5 March, 2023</p>
            <h5 className='title'>A beautiful sunday morning renaissance</h5>
            <p className='desc'>
                loreyay m ipsum dolor sit cbjs smriti jeena shristi karina samrat aayush yayyyyyy huraay we are friends yay bleh what is life cu jfe usef 
            </p>
            <Link to='/' className='button'>Read more</Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
