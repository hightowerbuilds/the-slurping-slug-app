
import './StorePage.css'
import buyNoodles from '../images/buyNoodles.jpg'
import ramenPackage from '../images/ramenPackage.jpg'
import DashboardNavBar from "../components/DashboardNavBar";
import VenmoButton from '../components/VenmoButton';
import Footer from '../components/Footer';

export default function StorePage() {
  return (
    <div className='storePageMainBox'>
 
        <DashboardNavBar />
        <div style={{padding: '2%'}}>  
        <div>
            <img src={buyNoodles} alt="" />
        </div>

        <div className='storePageRamenPhotoBox'>
  
            <div className='storePageRamenImage'>
                <img src={ramenPackage} />
                <br />
                <button className='ramenButton'>
                    add to cart
                </button>
            </div>

            <div className='storePageRamenImage'>
                <img src={ramenPackage} />
                <button className='ramenButton'>
                    add to cart
                </button>
            </div>

            <div className='storePageRamenImage'>
                <img src={ramenPackage} />
                <button className='ramenButton'>
                    add to cart
                </button>
            </div>

            <div className='storePageRamenImage'>
                <img src={ramenPackage} />
                <button className='ramenButton'>
                    add to cart
                </button>
            </div>

            <div className='storePageRamenImage'>
                <img src={ramenPackage} />
                <button className='ramenButton'>
                    add to cart
                </button>
            </div>

        
        </div>

        <div className='storePageVenmoButtonBox'>
            <VenmoButton className='storePageVenmoButton'/>
        </div>
        
        </div>
        <Footer />
    </div>
  )
}
