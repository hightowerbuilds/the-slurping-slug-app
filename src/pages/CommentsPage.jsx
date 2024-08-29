import { NavLink } from "react-router-dom"

import slugs from '../images/slugs.jpg'
import sluglickerLogo from '../images/sluglickerLogo.jpg'




export default function CommentsPage() {
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
        message booard
    </div>
  )
}
