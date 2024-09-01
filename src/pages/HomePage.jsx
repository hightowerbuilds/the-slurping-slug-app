
import './HomePage.css'
import { NavLink } from 'react-router-dom'

import slurpingLogo from '../images/browserImages/logo.jpg'
import slurpingSlug from '../images/browserImages/logo2.jpg'
import slurpingSlugMobile from '../images/mobileImages/logoMobile.jpeg'
import ramenMan from '../images/browserImages/ramenMan.jpg'

import DashboardNavBar from '../components/DashboardNavBar'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="homePageMainBox">
      
      <DashboardNavBar />

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
            Ramen, a renowned and revered representative of Japanese cuisine, radiates warmth and richness. Its roots trace back to humble beginnings, now blossoming into a beloved dish relished globally. Ramens robust foundation rests in its remarkable broth, meticulously simmered for countless hours, releasing a symphony of flavors from pork, chicken, or vegetables. Noodles, resilient and springy, provide a robust counterpoint to the rich broth. A rainbow of toppings graces the ramen bowl, each offering a unique revelation of textures and tastes. Roasted pork, succulent and tender, nestles alongside ramen eggs, their yolks a vibrant reminder of sunshine. A riot of vegetables, ranging from earthy mushrooms to vibrant greens, adds a refreshing crunch. The ritual of ramen is a revelation in itself. The aroma, redolent of savory delights, invites a sense of anticipation. The first slurp, a harmonious blend of broth and noodles, sets the stage for a remarkable culinary journey. Each subsequent bite, a revelation of textures and flavors, leaves a lasting impression.
            <br /><br />
            Ramen, a renowned and revered representative of Japanese cuisine, radiates warmth and richness. Its roots trace back to humble beginnings, now blossoming into a beloved dish relished globally. Ramens robust foundation rests in its remarkable broth, meticulously simmered for countless hours, releasing a symphony of flavors from pork, chicken, or vegetables. Noodles, resilient and springy, provide a robust counterpoint to the rich broth. A rainbow of toppings graces the ramen bowl, each offering a unique revelation of textures and tastes. Roasted pork, succulent and tender, nestles alongside ramen eggs, their yolks a vibrant reminder of sunshine. A riot of vegetables, ranging from earthy mushrooms to vibrant greens, adds a refreshing crunch. The ritual of ramen is a revelation in itself. The aroma, redolent of savory delights, invites a sense of anticipation. The first slurp, a harmonious blend of broth and noodles, sets the stage for a remarkable culinary journey. Each subsequent bite, a revelation of textures and flavors, leaves a lasting impression.
            <br /><br />
            <img src={ramenMan} />
            <br /><br />
            Ramen, a renowned and revered representative of Japanese cuisine, radiates warmth and richness. Its roots trace back to humble beginnings, now blossoming into a beloved dish relished globally. Ramens robust foundation rests in its remarkable broth, meticulously simmered for countless hours, releasing a symphony of flavors from pork, chicken, or vegetables. Noodles, resilient and springy, provide a robust counterpoint to the rich broth. A rainbow of toppings graces the ramen bowl, each offering a unique revelation of textures and tastes. Roasted pork, succulent and tender, nestles alongside ramen eggs, their yolks a vibrant reminder of sunshine. A riot of vegetables, ranging from earthy mushrooms to vibrant greens, adds a refreshing crunch. The ritual of ramen is a revelation in itself. The aroma, redolent of savory delights, invites a sense of anticipation. The first slurp, a harmonious blend of broth and noodles, sets the stage for a remarkable culinary journey. Each subsequent bite, a revelation of textures and flavors, leaves a lasting impression.
            <br /><br />
            <img src={slurpingLogo} />
            <br /><br />

        </div>
     

      <Footer />
    </div>
  )
}
