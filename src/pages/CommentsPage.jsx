import { NavLink } from "react-router-dom"

export default function CommentsPage() {
  return (
    <div style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#000000',
        color: 'white'
    }}>
        CommentsPage
        <NavLink to='/'>back button</NavLink>

        message booard
    </div>
  )
}
