
import './CommentsPage.css'
import DashboardNavBar from "../components/DashboardNavBar"
import Footer from '../components/Footer'
import MessageBoard from '../components/MessageBoard'


export default function CommentsPage() {

  return (
    <div style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#000000',
        color: 'white'
    }}> 
        <DashboardNavBar />
        <MessageBoard />
    
    <br />
    <Footer />
    </div>
  )
}
