import { NavLink } from "react-router-dom";
import './HomePage.css'
import slugs from '../images/slugs.jpg'
import slurpingSlug from '../images/logo2.jpg'
import comicsLogo from '../images/comicsLogo.jpg'
import musicLogo from '../images/musicLogo.jpg'
import sluglickerLogo from '../images/sluglickerLogo.jpg'
import noodlesLogo from '../images/noodlesLogo.jpg'
import peepsLogo from '../images/peepsLogo.jpg'

export default function HomePage() {
  return (
    <div className="homePageMainBox">
      
           
        <div className="homePageInteriorNavBar">
        <NavLink to='/'><img src={sluglickerLogo}/><br /><img src={slugs}/></NavLink>
        <NavLink to="/gallery" > <img src={musicLogo} /></NavLink>
        <NavLink to="/comics" ><img src={comicsLogo} /></NavLink>
        <NavLink to="/store" ><img src={noodlesLogo} /></NavLink>
        <NavLink to="/comments" ><img src={peepsLogo} /></NavLink>
        </div>
  
        <div className="homePageSlurpingLogo">
            <img src={slurpingSlug} />
        </div>


        <p className="homePageSlurpTag">
      THE MORE YOU SLURP...
        </p>

        <div className="homePageProductDescription" style={{
            fontFamily: 'courier',
            fontSize: 20,
            color: 'seagreen',
            padding: '5%',
           
        }}>
            <h3>Moving the NOODLE...</h3>
            <br />
            
            Ramen, a renowned and revered representative of Japanese cuisine, radiates warmth and richness. Its roots trace back to humble beginnings, now blossoming into a beloved dish relished globally. Ramens robust foundation rests in its remarkable broth, meticulously simmered for countless hours, releasing a symphony of flavors from pork, chicken, or vegetables. Noodles, resilient and springy, provide a robust counterpoint to the rich broth. A rainbow of toppings graces the ramen bowl, each offering a unique revelation of textures and tastes. Roasted pork, succulent and tender, nestles alongside ramen eggs, their yolks a vibrant reminder of sunshine. A riot of vegetables, ranging from earthy mushrooms to vibrant greens, adds a refreshing crunch. The ritual of ramen is a revelation in itself. The aroma, redolent of savory delights, invites a sense of anticipation. The first slurp, a harmonious blend of broth and noodles, sets the stage for a remarkable culinary journey. Each subsequent bite, a revelation of textures and flavors, leaves a lasting impression.
            <br /><br />
            Ramen, a renowned and revered representative of Japanese cuisine, radiates warmth and richness. Its roots trace back to humble beginnings, now blossoming into a beloved dish relished globally. Ramens robust foundation rests in its remarkable broth, meticulously simmered for countless hours, releasing a symphony of flavors from pork, chicken, or vegetables. Noodles, resilient and springy, provide a robust counterpoint to the rich broth. A rainbow of toppings graces the ramen bowl, each offering a unique revelation of textures and tastes. Roasted pork, succulent and tender, nestles alongside ramen eggs, their yolks a vibrant reminder of sunshine. A riot of vegetables, ranging from earthy mushrooms to vibrant greens, adds a refreshing crunch. The ritual of ramen is a revelation in itself. The aroma, redolent of savory delights, invites a sense of anticipation. The first slurp, a harmonious blend of broth and noodles, sets the stage for a remarkable culinary journey. Each subsequent bite, a revelation of textures and flavors, leaves a lasting impression.
            <br /><br />
            Ramen, a renowned and revered representative of Japanese cuisine, radiates warmth and richness. Its roots trace back to humble beginnings, now blossoming into a beloved dish relished globally. Ramens robust foundation rests in its remarkable broth, meticulously simmered for countless hours, releasing a symphony of flavors from pork, chicken, or vegetables. Noodles, resilient and springy, provide a robust counterpoint to the rich broth. A rainbow of toppings graces the ramen bowl, each offering a unique revelation of textures and tastes. Roasted pork, succulent and tender, nestles alongside ramen eggs, their yolks a vibrant reminder of sunshine. A riot of vegetables, ranging from earthy mushrooms to vibrant greens, adds a refreshing crunch. The ritual of ramen is a revelation in itself. The aroma, redolent of savory delights, invites a sense of anticipation. The first slurp, a harmonious blend of broth and noodles, sets the stage for a remarkable culinary journey. Each subsequent bite, a revelation of textures and flavors, leaves a lasting impression.
     
        </div>
        
        <p>
        howzit dun???
        </p>
    </div>
  )
}
