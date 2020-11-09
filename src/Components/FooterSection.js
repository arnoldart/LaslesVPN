import React from 'react'
import './FooterSection.css'

function FooterSection({
  Logo,
  desc,
  iconsoc1,
  iconsoc2,
  iconsoc3,
  year,
  alt
}) {
  return (
    <>
      <div style={{display: 'flex', justifyContent: 'space-between', margin: '3rem 6rem'}}>
        <div>
          <img src={Logo} alt={alt}></img>
          <p style={{color: '#4F5665', width: '20rem', lineHeight: '2rem'}}>{desc}</p>
          <div style={{display: 'flex', marginLeft: '-1rem', marginTop: '1rem'}}>
            <img src={iconsoc1} alt={alt} className="border--footerIcon"></img>
            <img src={iconsoc2} alt={alt} className="border--footerIcon"></img>
            <img src={iconsoc3} alt={alt} className="border--footerIcon"></img>
          </div>
          <p style={{color: '#AFB5C0', marginTop: '1.5rem'}}>&copy;{year}</p>
        </div>
        <aside style={{display: 'flex'}}>
          <div>
            <h4>Product</h4>
            <div style={{color: '#4F5665', margin: '1rem 0'}} className="footer--product">
              <p>Download</p>
              <p>Pricing</p>
              <p>Locations</p>
              <p>Server</p>
              <p>Countries</p>
              <p>Blog</p>
            </div>
          </div>
          <div style={{margin: '0 8rem'}}>
            <h4>Engage</h4>
            <div style={{color: '#4F5665', margin: '1rem 0'}} className="footer--product">
              <p>LaslesVPN ?</p>
              <p>FAQ</p>
              <p>Tutorials</p>
              <p>About Us</p>
              <p>Privacy Policy</p>
              <p>Term of Service</p>
            </div>
          </div>
          <div>
            <h4>Earn Money</h4>
            <div style={{color: '#4F5665', margin: '1rem 0'}} className="footer--product">
              <p>Affiliate</p>
              <p>Become Partner</p>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}

export default FooterSection
