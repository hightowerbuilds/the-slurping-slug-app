import { NavLink } from "react-router-dom"

import sluglickerLogo from '../images/sluglickerLogo.jpg'
import slugs from '../images/slugs.jpg'

export default function ComicsPage() {
  return (
    <div style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#000000',
        color: 'white'
    }}>
    
        <NavLink to='/'> 
            <img  src={sluglickerLogo} />
            <br />
            <img  src={slugs}  />
            </NavLink>
        <div>
            links to recent comics
            <br />
            info about the slug licker comic 
        </div>
    </div>
  )
}
