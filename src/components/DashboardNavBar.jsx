import './DashboardNavBar.css'
import { NavLink } from "react-router-dom";
import slugs from '../images/slugs.jpg'
import comicsLogo from '../images/comicsLogo.jpg'
import musicLogo from '../images/musicLogo.jpg'
import sluglickerLogo from '../images/sluglickerLogo.jpg'
import noodlesLogo from '../images/noodlesLogo.jpg'
import peepsLogo from '../images/peepsLogo.jpg'

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
