import { NavLink } from "react-router-dom";

import slurpingSlug from '../images/logo.jpg'

export default function HomePage() {
  return (
    <div style={{
        margin: '0%',
        height: 'auto',
        width: '100%',
        backgroundColor: '#000000'
    }}>
        <div style={{
            display: 'inline-flex',
            justifyContent: "space-around",
            width: "50%"
        }}>
        <NavLink to="/gallery" >images page</NavLink>
        <NavLink to="/comics" >comics page</NavLink>
        <NavLink to="/store" >store page</NavLink>
        </div>
        <br /><br />
        <div>
            <img src={slurpingSlug} alt="" />
        </div>
        <h2>the slurping slug</h2>

        <p>
        the more you slurp...
        </p>

        <div>
        moving the noodle...
        </div>
        
        <p>
        howzit dun???
        </p>
    </div>
  )
}
