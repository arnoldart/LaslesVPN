import React from 'react'
import {Button} from './Button'

function SubSection() {
  return (
    <>
      <div style={{margin: '8rem 10.5rem'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div style={{width: '20rem'}}>
            <h1 style={{color: '#0B132A'}}>Subscribe Now for Get Special Features!</h1>
            <p style={{color: '#4F5665', marginTop: '1rem'}}>Let's subscribe with us and find the fun.</p>
          </div>
          <div>
            <Button buttonSize="btn--large" buttonShadow="btn--shadow">
              <h1>Subscribe Now</h1>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SubSection
