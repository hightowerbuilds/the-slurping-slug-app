import { NavLink } from "react-router-dom"

export default function ComicsPage() {
  return (
    <div style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#000000',
        color: 'white'
    }}>
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
