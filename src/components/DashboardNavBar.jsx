
import './DashboardNavBar.css'
import { NavLink } from "react-router-dom";
import slugs from '../images/browserImages/slugs.jpg'
import comicsLogo from '../images/browserImages/comicsLogo.jpg'
import musicLogo from '../images/browserImages/musicLogo.jpg'
import sluglickerLogo from '../images/browserImages/sluglickerLogo.jpg'
import noodlesLogo from '../images/browserImages/noodlesLogo.jpg'
import peepsLogo from '../images/browserImages/peepsLogo.jpg'

export default function DashboardNavBar() {
  return (

    <div className="homePageExteriorNavBar">
        <div className="homePageMiddleNavBar">
            <div className="homePageInteriorNavBar">
                <NavLink style={{ width: '200px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}} to='/'>
                    <img src={sluglickerLogo}/><br />
                    <img src={slugs}/>
                </NavLink>

                <NavLink  to="/gallery" > 
                    <img src={musicLogo} />
                </NavLink>

                <NavLink to="/comics" >
                    <img src={comicsLogo} />
                </NavLink>

                <NavLink to="/store" >
                    <img src={noodlesLogo} />
                </NavLink>

                <NavLink to="/comments" >
                    <img src={peepsLogo} />
                </NavLink>
            </div>
        </div>
    </div>

  )
}
