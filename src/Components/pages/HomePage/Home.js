import React from 'react';
import CardSection from '../../CardSection';
import GlobalUser from '../../GlobalUser';
import CommentSection from '../../CommentSection'
import HeroSection from '../../HeroSection';
import HeroSections from '../../HeroSections'
import SubCriber from '../../SubSection'
import { CardObjOne } from '../CardPage/DataCard';
import { homeObjOne, homeObjTwo } from './Data';
import {CommentObjOne, CommentObjTwo, CommentObjThree} from '../CommentPage/DataComment'
import {ReactComponent as Pageination} from '../../images/pageintation.svg'
import {ReactComponent as Left} from '../../images/left.svg'
import {ReactComponent as Right} from '../../images/right.svg'
import FooterSection from '../../FooterSection';
import {FooterObjOne} from '../Footer/FooterData'

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSections {...homeObjTwo} />
      <CardSection {...CardObjOne}/>
      <GlobalUser />
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{textAlign: 'center', width: '35rem', lineHeight: '2rem'}}>
          <h2>Trusted by Thousands of <br></br> Happy Customer</h2>
          <p style={{color: '#4F5665', marginTop: '1rem'}}>These are the stories of our customers who have joined us with great <br></br> pleasure when using this crazy feature.</p>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <CommentSection {...CommentObjOne}/>
        <CommentSection {...CommentObjTwo}/>
        <CommentSection {...CommentObjThree}/>
      </div>
     <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0 4.5rem'}}>
      <div>
        <Pageination />
      </div>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Left style={{margin: '0 1rem'}}/>
        <Right />
      </div>
     </div>
     <SubCriber />
     <FooterSection {...FooterObjOne}/>
    </>
  );
}

export default Home;