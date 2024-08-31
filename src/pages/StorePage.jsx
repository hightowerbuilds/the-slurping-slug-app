
import './StorePage.css'
import buyNoodles from '../images/buyNoodles.jpg'
import DashboardNavBar from "../components/DashboardNavBar";

export default function StorePage() {
  return (
    <div style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#000000',
        color: 'white'
    }}>
  
        <DashboardNavBar />
      
        <div style={{
            padding: '2%'
        }}>
           
            <div>
                <img src={buyNoodles} alt="" />
            </div>

            <p style={{
                padding: '3%'
            }}>
                <h2>
                NOODLE MENU
                </h2>
                <ol style={{
                    padding: '3%'
                }}>
                    <li>pizza noodles $300.00</li>
                    <li>salad noodles $1,000,000.00</li>
                    <li>dope-ass noodles $666,666.66</li>
                </ol>
            </p>
        </div>
        
    </div>
  )
}
