
import DashboardNavBar from "../components/DashboardNavBar"
import Footer from "../components/Footer"

export default function ComicsPage() {
  return (
    <div style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#000000',
        color: 'white'
    }}>
    
      <DashboardNavBar />
        <div>
            links to recent comics
            <br />
            info about the slug licker comic 
        </div>
        <Footer />
    </div>
  )
}
