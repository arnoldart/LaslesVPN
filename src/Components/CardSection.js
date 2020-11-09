import React from 'react'
import './CardSection.css'
import {ReactComponent as CentangP} from './images/Vector.svg'
import { Button } from './Button'

function CardSection({
  TextHeading,
  Img,
  alt,
  TextDesc1,
  TextDesc2,
  TextDesc3,
  TextDesc4,
  Price,
}) {
  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{textAlign: 'center', width: '35rem', lineHeight: '2rem'}}>
          <h2>Choose Your Plan</h2>
          <p style={{color: '#4F5665', marginTop: '1rem'}}>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent:'center', marginTop: '5rem'}}>
        <div className="card" style={{display: 'flex', justifyContent: 'center', flexDirection:'column', textAlign: 'center', margin: '0 3rem'}}>
          <img src={Img} alt={alt}></img>
          <h3 style={{margin: '1rem 0'}}>{TextHeading}</h3>
          <div style={{display: 'flex', flexDirection: 'row-reverse', alignItems: 'center'}}>
            <div>
              <p style={{color: '#4F5665', marginLeft: '1rem', textAlign: 'left', marginTop: '1rem'}}>Unlimited Bandwitch</p>
              <p style={{color: '#4F5665', marginLeft: '1rem', textAlign: 'left', marginTop: '1rem'}}>Encrypted Connection</p>
              <p style={{color: '#4F5665', marginLeft: '1rem', textAlign: 'left', marginTop: '1rem'}}>No Traffic Logs</p>
              <p style={{color: '#4F5665', marginLeft: '1rem', textAlign: 'left', marginTop: '1rem'}}>Works on All Devices</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <CentangP style={{marginTop: '1.6rem',position: 'relative', top: '-.2rem'}}/>
              <CentangP style={{marginTop: '1.6rem',position: 'relative', top: '-.2rem'}}/>
              <CentangP style={{marginTop: '1.6rem',position: 'relative', top: '-.2rem'}}/>
              <CentangP style={{marginTop: '1.6rem',position: 'relative', top: '-.2rem'}}/>
            </div>
          </div>
          <h2 style={{marginTop: '9rem', marginBottom: '1rem'}}>Free</h2>
          <Button buttonStyle="btn--outline" buttonBorder="border--large" buttonColor="red">
            <h2>Select</h2>
          </Button>
        </div>
        <div className="card" style={{display: 'flex', justifyContent: 'center', flexDirection:'column', textAlign: 'center', margin: '0 3rem'}}>
          <img src={Img} alt={alt}></img>
          <h3 style={{margin: '1rem 0'}}>{TextHeading}</h3>
          <div style={{display: 'flex', flexDirection: 'row-reverse', alignItems: 'center'}}>
            <div>
              <p style={{color: '#4F5665', marginLeft: '1rem', textAlign: 'left', marginTop: '1rem'}}>Unlimited Bandwitch</p>
              <p style={{color: '#4F5665', marginLeft: '1rem', textAlign: 'left', marginTop: '1rem'}}>Encrypted Connection</p>
              <p style={{color: '#4F5665', marginLeft: '1rem', textAlign: 'left', marginTop: '1rem'}}>Yes Traffic Logs</p>
              <p style={{color: '#4F5665', marginLeft: '1rem', textAlign: 'left', marginTop: '1rem'}}>Works on All Devices</p>
              <p style={{color: '#4F5665', marginLeft: '1rem', textAlign: 'left', marginTop: '1rem'}}>Connect Anyware</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <CentangP style={{marginTop: '1.6rem',position: 'relative', top: '-.2rem'}}/>
              <CentangP style={{marginTop: '1.6rem',position: 'relative', top: '-.2rem'}}/>
              <CentangP style={{marginTop: '1.6rem',position: 'relative', top: '-.2rem'}}/>
              <CentangP style={{marginTop: '1.6rem',position: 'relative', top: '-.2rem'}}/>
              <CentangP style={{marginTop: '1.6rem',position: 'relative', top: '-.2rem'}}/>
            </div>
          </div>
          <h2 style={{marginTop: '7rem', marginBottom: '1rem'}}>$9 / <span style={{color: '#4F5665', fontWeight: '200'}}>mo</span></h2>
          <Button buttonStyle="btn--outline" buttonBorder="border--large" buttonColor="red">
            <h2>Select</h2>
          </Button>
        </div> 
        <div className="card" style={{display: 'flex', justifyContent: 'center', flexDirection:'column', textAlign: 'center', margin: '0 3rem'}}>
          <img src={Img} alt={alt}></img>
          <h3 style={{margin: '1rem 0'}}>{TextHeading}</h3>
          <div style={{display: 'flex', flexDirection: 'row-reverse', alignItems: 'center'}}>
            <div>
              <p style={{color: '#4F5665', marginLeft: '1rem', textAlign: 'left', marginTop: '1rem'}}>Unlimited Bandwitch</p>
              <p style={{color: '#4F5665', marginLeft: '1rem', textAlign: 'left', marginTop: '1rem'}}>Encrypted Connection</p>
              <p style={{color: '#4F5665', marginLeft: '1rem', textAlign: 'left', marginTop: '1rem'}}>Yes Traffic Logs</p>
              <p style={{color: '#4F5665', marginLeft: '1rem', textAlign: 'left', marginTop: '1rem'}}>Works on All Devices</p>
              <p style={{color: '#4F5665', marginLeft: '1rem', textAlign: 'left', marginTop: '1rem'}}>Connect Anyware</p>
              <p style={{color: '#4F5665', marginLeft: '1rem', textAlign: 'left', marginTop: '1rem'}}>Get New Features</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <CentangP style={{marginTop: '1.6rem',position: 'relative', top: '-.2rem'}}/>
              <CentangP style={{marginTop: '1.6rem',position: 'relative', top: '-.2rem'}}/>
              <CentangP style={{marginTop: '1.6rem',position: 'relative', top: '-.2rem'}}/>
              <CentangP style={{marginTop: '1.6rem',position: 'relative', top: '-.2rem'}}/>
              <CentangP style={{marginTop: '1.6rem',position: 'relative', top: '-.2rem'}}/>
              <CentangP style={{marginTop: '1.6rem',position: 'relative', top: '-.2rem'}}/>
            </div>
          </div>
          <h2 style={{marginTop: '5rem', marginBottom: '1rem'}}>12 / <span style={{color: '#4F5665', fontWeight: '200'}}>mo</span> </h2>
          <Button buttonStyle="btn--outline" buttonBorder="border--large" buttonColor="red">
            <h2>Select</h2>
          </Button>
        </div> 
      </div>
    </>
  )
}

export default CardSection
