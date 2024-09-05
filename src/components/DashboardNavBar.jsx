
import './DashboardNavBar.css'
import { NavLink } from "react-router-dom";
import slugs from '../images/browserImages/slugs.jpg'
import comicsLogo from '../images/browserImages/comicsLogo.jpg'
import musicLogo from '../images/browserImages/musicLogo.jpg'
import sluglickerLogo from '../images/browserImages/sluglickerLogo.jpg'
import noodlesLogo from '../images/browserImages/noodlesLogo.jpg'
import peepsLogo from '../images/browserImages/peepsLogo.jpg'
import comicsLogoMobile from '../images/mobileImages/comicsLogoMobile.jpg'
import musicLogoMobile from '../images/mobileImages/musicLogoMobile.jpg'
import noodlesLogoMobile from '../images/mobileImages/noodlesLogoMobile.jpg'
import peepsLogoMobile from '../images/mobileImages/peepsLogoMobile.jpg'


export default function DashboardNavBar() {
  return (

    <div className="homePageExteriorNavBar">
        <div className="homePageMiddleNavBar">
            <div className="homePageInteriorNavBar">

                <div className='slugBoxMobile'>
                <NavLink style={{ 
                    width: '200px', 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    justifyContent: 'center'
                    }} to='/'>
                    <img src={sluglickerLogo}/><br />
                    <img src={slugs}/>
                </NavLink>
                </div>
               
                <div className='navBarButtonBoxDesktop'>
                <NavLink  to="/gallery" > 
                    <img className='musicLogoMobile' src={musicLogoMobile}/>
                    <img className='musicLogoDesktop' src={musicLogo} />
                </NavLink>

                <NavLink to="/comics" >
                    <img className='comicsLogoMobile' src={comicsLogoMobile} />
                    <img className='comicsLogoDesktop' src={comicsLogo} />
                </NavLink>

                <NavLink to="/store" >
                    <img className='noodlesLogoMobile' src={noodlesLogoMobile}/>
                    <img className='noodlesLogoDesktop' src={noodlesLogo} />
                </NavLink>

                <NavLink to="/comments" >
                    <img className='peepsLogoMobile' src={peepsLogoMobile}/>
                    <img className='peepsLogoDesktop' src={peepsLogo} />
                </NavLink>
                </div>
           
            </div>
        </div>
    </div>

  )
}
