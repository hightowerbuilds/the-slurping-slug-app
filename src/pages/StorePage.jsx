
import './StorePage.css'
import buyNoodles from '../images/browserImages/buyNoodles.jpg'
import ramenPackage from '../images/browserImages/ramenPackage.jpg'
import seasoningImage from '../images/browserImages/seasoningImage.jpg'
import hoodieImage from '../images/browserImages/hoodieImage.jpg'

import DashboardNavBar from "../components/DashboardNavBar";
import VenmoButton from '../components/VenmoButton';
import Footer from '../components/Footer';



export default function StorePage() {
  return (
    <div className='storePageMainBox'>
 
        <DashboardNavBar />
        <div style={{padding: '2%'}}>  
            <div className='storePageBuyNoodles'>
            <img src={buyNoodles} alt="" />
            </div>

           
       
       <h3 className='storePageBoxTitles'>noodles</h3>
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


        <h3 className='storePageBoxTitles'>seasonings</h3>
        <div className='storePageRamenPhotoBox'>
  
            <div className='storePageRamenImage'>
                <img src={seasoningImage} />
                <br />
                <button className='ramenButton'>
                    add to cart
                </button>
            </div>

            <div className='storePageRamenImage'>
                <img src={seasoningImage} />
                <button className='ramenButton'>
                    add to cart
                </button>
            </div>

            <div className='storePageRamenImage'>
                <img src={seasoningImage} />
                <button className='ramenButton'>
                    add to cart
                </button>
            </div>

            <div className='storePageRamenImage'>
                <img src={seasoningImage} />
                <button className='ramenButton'>
                    add to cart
                </button>
            </div>

            <div className='storePageRamenImage'>
                <img src={seasoningImage} />
                <button className='ramenButton'>
                    add to cart
                </button>
            </div>
        </div>


    
        <h3 className='storePageBoxTitles'>hoodies</h3>
        <div className='storePageRamenPhotoBox'>
        
            <div className='storePageRamenImage'>
                <img src={hoodieImage} />
                <br />
                <button className='ramenButton'>
                    add to cart
                </button>
            </div>

            <div className='storePageRamenImage'>
                <img src={hoodieImage} />
                <button className='ramenButton'>
                    add to cart
                </button>
            </div>

            <div className='storePageRamenImage'>
                <img src={hoodieImage} />
                <button className='ramenButton'>
                    add to cart
                </button>
            </div>

            <div className='storePageRamenImage'>
                <img src={hoodieImage} />
                <button className='ramenButton'>
                    add to cart
                </button>
            </div>

            <div className='storePageRamenImage'>
                <img src={hoodieImage} />
                <button className='ramenButton'>
                    add to cart
                </button>
            </div>
        </div>

        <div className='storePageVenmoButtonBox'>
            <VenmoButton/>
            </div>
        
        </div>
        <Footer />
    </div>
  )
}
