
import './HomePage.css'
import { NavLink } from 'react-router-dom'
import slurpingSlug from '../images/browserImages/theSlurpingSlugLogoNew.jpg'
import slurpingSlugMobile from '../images/mobileImages/theSlurpingSlugLogoMobile.jpg'
import ramenMan from '../images/browserImages/ramenMan.jpg'
import ramenManMobile from '../images/mobileImages/ramenManMobile.jpg'
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
        
      <div className="homePageSlurpTag">

          <h4 style={{ padding: '10%'}}>the more you slurp...</h4> 
          
          <input style={{ width: '80%', color: 'white', margin: '1%'}} type="text" placeholder="something weird come round"/>
      
          <button style={{ width: '80%', height: '4vh', color: 'white', marginBottom: '10%', borderRadius: '%' }}>
            submit your response
          </button>

      </div>

        <div className="homePageProductDescription">

            <h3>Moving the NOODLE...</h3>

            <br />
           What is the Slurping Slug? Why are noodles all across the world looking at this new Noodle? 
            <br /><br />
           Slurp it, drink it, burp it, _____ it.
            <br /><br />
            <img className='ramenManDesktop' src={ramenMan} />
            <img className='ramenManMobile' src={ramenManMobile}/>
            <br /><br />
           So what now? Where's the nearest Slurp Shop? 
          

        </div>
     
      <Footer />
    </div>
  )
}
