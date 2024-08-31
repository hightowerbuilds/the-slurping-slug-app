
import './CommentsPage.css'
import DashboardNavBar from "../components/DashboardNavBar"
import Footer from '../components/Footer'


export default function CommentsPage() {
  return (
    <div style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#000000',
        color: 'white'
    }}>
     <DashboardNavBar />
        message booard
    <br />
        <Footer />
    </div>
  )
}
