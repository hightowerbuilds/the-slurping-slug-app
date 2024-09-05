
import './HomePage.css'
import { NavLink } from 'react-router-dom'
import slurpingLogo from '../images/browserImages/logo.jpg'
import slurpingSlug from '../images/browserImages/theSlurpingSlugLogoNew.jpg'
import slurpingSlugMobile from '../images/mobileImages/theSlurpingSlugLogoMobile.jpg'
import ramenMan from '../images/browserImages/ramenMan.jpg'
import DashboardNavBar from '../components/DashboardNavBar'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="homePageMainBox">
      
      <DashboardNavBar />

    {/* DESKTOP STAGING */}

      <NavLink className='homePageOpenSoonTag' to='/store'>
        OPENING SOON!
      </NavLink>
       
      <NavLink className="homePageSlurpingLogo" to='/store'>  
        <img className='slupringSlugImg' src={slurpingSlug} />
      </NavLink>

    {/* MOBILE STAGING  */}

      <NavLink className="homePageSlurpingLogoMobile" to='/store'>  
        <img className='slupringSlugImg' src={slurpingSlugMobile} />
      </NavLink>
        
      <p className="homePageSlurpTag">

        THE MORE YOU SLURP...
          
          <input style={{ margin: '1%'}} type="text" placeholder="warts grow somewhere on your body/butt"/>
        
          <button style={{ margin: '1%'}}>
            submit your response
          </button>

      </p>

        <div className="homePageProductDescription">

            <h3>Moving the NOODLE...</h3>

            <br />
           What is the Slurping Slug? Why are noodles all across the world looking at this new Noodle? 
            <br /><br />
           Slurp it, drink it, burp it, _____ it.
            <br /><br />
            <img src={ramenMan} />
            <br /><br />
           So what now? Where's the nearest Slurp Shop? 
            <br /><br />
            <img src={slurpingLogo} />
            <br /><br />

        </div>
     
      <Footer />
    </div>
  )
}
