import React from 'react'
import './CommentSection.css'

function CommentSection({
  imgIcon,
  alt,
  name,
  region,
  img,
  rating,
  desc
}) {
  return (
    <>
      <div>
        <div style={{width: '24rem', height: '16rem', padding: '2rem', textAlign: 'left', margin: '3rem 1rem'}} className="comment--card">
          <div style={{display: 'flex', alignItems: 'center'}}>
            <div>
              <img src={img} alt={alt}></img>
            </div>
            <div style={{margin: '0 1rem', lineHeight: '1.5rem'}}>
              <h4 style={{color: '#0B132A'}}>{name}</h4>
              <p style={{color : '#4F5665'}}>{region}</p>
            </div>
            <div style={{display: 'flex', marginLeft: '5rem'}}>
              <p>{rating}</p>
              <img src={imgIcon} alt={alt}></img>
            </div>
          </div>
          <div style={{lineHeight: '2rem', marginTop: '1rem', color: '#0B132A'}}>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommentSection
