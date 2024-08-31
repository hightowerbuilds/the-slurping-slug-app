
import './StorePage.css'
import buyNoodles from '../images/buyNoodles.jpg'
import DashboardNavBar from "../components/DashboardNavBar";
import VenmoButton from '../components/VenmoButton';

export default function StorePage() {
  return (
    <div style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#000000',
        color: 'white'
    }}>
  
        <DashboardNavBar />
        <div style={{padding: '2%'}}>  
        <div>
            <img src={buyNoodles} alt="" />
        </div>

        <div className='storePageRamenPhotoBox'>
  
            <div className='storePageRamenImage'>
                ramen
            </div>

            <div className='storePageRamenImage'>
                ramen
            </div>

            <div className='storePageRamenImage'>
                ramen
            </div>

            <div className='storePageRamenImage'>
                ramen
            </div>

            <div className='storePageRamenImage'>
                ramen
            </div>
        </div>

        <p style={{padding: '3%'}}>
        <h2>NOODLE MENU</h2>
        <div><VenmoButton /></div>
        </p>
        </div>
        
    </div>
  )
}
