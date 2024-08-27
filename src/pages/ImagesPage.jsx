import { NavLink } from "react-router-dom";


export default function ImagesPage() {
  return (
    <div style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#000000',
        color: 'white'
    }}>
        ImagesPage
        <NavLink to='/'>back button</NavLink>
        <h3>
            Gallery of Images...  <br />Possibly a Menu of Items ... <br />Photos / Video of stuff
        </h3>
    </div>
  )
}
