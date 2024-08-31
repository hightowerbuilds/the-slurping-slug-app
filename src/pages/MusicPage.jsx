
import './MusicPage.css'
import DashboardNavBar from "../components/DashboardNavBar";
import Footer from '../components/Footer';


export default function ImagesPage() {
  return (
    <div style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#000000',
        color: 'white'
    }}>
        <DashboardNavBar/>
        <h3>
          music - slug lickers tracks / links
        </h3>
        <Footer />
    </div>
  )
}
