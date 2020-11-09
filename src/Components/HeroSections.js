import React from 'react'
import './HeroSections.css'
import { ReactComponent as Centang } from './images/img3.svg'
import { ReactComponent as User } from './images/user.svg'

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) { 
  return (
    <>
       <div
        // className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div style={{display: 'flex', margin: '9rem 8rem', justifyContent: 'space-between'}}>
          <div style={{display: 'flex'}}>
            <aside>
              <User />
            </aside>
            <div>
              <h2>90+</h2>
              <p style={{color: '#4F5665'}}>Users</p>
            </div>
          </div>
          <div style={{display: 'flex'}}>
            <aside>
              <User />
            </aside>
            <div>
              <h2>30+</h2>
              <p style={{color: '#4F5665'}}>Locations</p>
            </div>
          </div>
          <div style={{display: 'flex'}}>
            <aside>
              <User />
            </aside>
            <div>
              <h2>50+</h2>
              <p style={{color: '#4F5665'}}>Servers</p>
            </div>
          </div>
        </div>

        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src={img} alt={alt} className='home__hero-img' />
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-text-wrapper2'>
                <div className='top-line'>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                <div style={{display: 'flex', alignItems: 'center', margin: '.5rem 0', color: '#4F5665'}}>
                  <Centang />
                  <p className="home__hero-fitur">Powerfull online protection.</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center', margin: '1rem 0', color: '#4F5665'}}>
                  <Centang />
                  <p className="home__hero-fitur">Internet without borders.</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center', margin: '1rem 0', color: '#4F5665'}}>
                  <Centang />
                  <p className="home__hero-fitur">Supercharged VPN</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center', margin: '1rem 0', color: '#4F5665'}}>
                  <Centang />
                  <p className="home__hero-fitur">No specific time limits.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
