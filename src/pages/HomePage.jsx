import { NavLink } from "react-router-dom";


export default function HomePage() {
  return (
    <div>
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
