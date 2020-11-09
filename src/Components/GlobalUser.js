import React from 'react'
import {ReactComponent as Map} from './images/Huge Global.svg'
import { ReactComponent as Sponsor } from './images/Sponsored.svg'

function GlobalUser() {
  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center', margin: '5rem 0'}}>
        <div style={{textAlign: 'center', width: '35rem', lineHeight: '2rem'}}>
          <h2>Huge Global Network <br></br> of Fast VPN</h2>
          <p style={{color: '#4F5665', marginTop: '1rem'}}>See LaslesVPN everywhere to make it easier for you when you move locations.</p>
        </div>
      </div>
      <div style={{margin: '0 10rem'}}>
        <Map />
      </div>
      <div style={{margin: '0 6rem'}}>
        <Sponsor />
      </div>
    </>
  )
}

export default GlobalUser
