
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

      <div className="homePageProductDescription">
          <img className='ramenManDesktop' src={ramenMan} />
          <img className='ramenManMobile' src={ramenManMobile}/>
      </div>
     
      <Footer />
    </div>
  )
}
