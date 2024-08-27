import { NavLink } from "react-router-dom"

export default function ComicsPage() {
  return (
    <div>
        ComicsPage
        <NavLink to='/'>back button</NavLink>
        <div>
            links to recent comics
            <br />
            info about the slug licker comic 
        </div>
    </div>
  )
}
