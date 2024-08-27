import { NavLink } from "react-router-dom";


export default function StorePage() {
  return (
    <div style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#000000',
        color: 'white'
    }}>StorePage
        <NavLink to='/'>back button</NavLink>

        <p>
            all the purchasing will be on this page... need to learn how to setup stripe.. . venmo... 
        </p>
    </div>
  )
}
