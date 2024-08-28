import { NavLink } from "react-router-dom";

import slugs from '../images/slugs.jpg'
import slurpingSlug from '../images/logo2.jpg'

export default function HomePage() {
  return (
    <div style={{
        margin: '0%',
        height: 'auto',
        width: '100%',
        backgroundColor: '#000000',
    }}>
        <div style={{
            padding: '2%',
            display: 'flex',
            alignItems: 'center'
        }}>
            <NavLink to='/'> <img src={slugs}  /></NavLink>
       
        <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: "space-around",
            width: "50%",
            fontFamily: 'monospace',
            fontSize: '20px',
            color: 'seagreen',
            padding: '3%'
        }}>
        <NavLink to="/gallery" >images</NavLink>
        <NavLink to="/comics" >comics</NavLink>
        <NavLink to="/store" >store</NavLink>
        <NavLink to="/comments" >comments</NavLink>
        </div>
        </div>
      
   
        <br /><br />
        <div style={{
            padding: '1%',

        }}>
            <img src={slurpingSlug} />
        </div>


        <p style={{
            color: 'white',
            fontFamily: 'courier',
            fontSize: 28,
            padding: '2%',
            margin: '2%',
            width: '92%',
            display: 'flex',
            justifyContent: 'center',
            border: '2px white dotted'
        }}>
      THE MORE YOU SLURP...
        </p>

        <div style={{
            fontFamily: 'courier',
            fontSize: 20,
            color: 'seagreen',
            padding: '2%',
           
        }}>
            <h3>Moving the NOODLE...</h3>
            <p style={{
                 padding: '3%'
            }}>
            Ramen, a renowned and revered representative of Japanese cuisine, radiates warmth and richness. Its roots trace back to humble beginnings, now blossoming into a beloved dish relished globally. Ramens robust foundation rests in its remarkable broth, meticulously simmered for countless hours, releasing a symphony of flavors from pork, chicken, or vegetables. Noodles, resilient and springy, provide a robust counterpoint to the rich broth. A rainbow of toppings graces the ramen bowl, each offering a unique revelation of textures and tastes. Roasted pork, succulent and tender, nestles alongside ramen eggs, their yolks a vibrant reminder of sunshine. A riot of vegetables, ranging from earthy mushrooms to vibrant greens, adds a refreshing crunch. The ritual of ramen is a revelation in itself. The aroma, redolent of savory delights, invites a sense of anticipation. The first slurp, a harmonious blend of broth and noodles, sets the stage for a remarkable culinary journey. Each subsequent bite, a revelation of textures and flavors, leaves a lasting impression.
            <br /><br />
            Ramen, a renowned and revered representative of Japanese cuisine, radiates warmth and richness. Its roots trace back to humble beginnings, now blossoming into a beloved dish relished globally. Ramens robust foundation rests in its remarkable broth, meticulously simmered for countless hours, releasing a symphony of flavors from pork, chicken, or vegetables. Noodles, resilient and springy, provide a robust counterpoint to the rich broth. A rainbow of toppings graces the ramen bowl, each offering a unique revelation of textures and tastes. Roasted pork, succulent and tender, nestles alongside ramen eggs, their yolks a vibrant reminder of sunshine. A riot of vegetables, ranging from earthy mushrooms to vibrant greens, adds a refreshing crunch. The ritual of ramen is a revelation in itself. The aroma, redolent of savory delights, invites a sense of anticipation. The first slurp, a harmonious blend of broth and noodles, sets the stage for a remarkable culinary journey. Each subsequent bite, a revelation of textures and flavors, leaves a lasting impression.
            <br /><br />
            Ramen, a renowned and revered representative of Japanese cuisine, radiates warmth and richness. Its roots trace back to humble beginnings, now blossoming into a beloved dish relished globally. Ramens robust foundation rests in its remarkable broth, meticulously simmered for countless hours, releasing a symphony of flavors from pork, chicken, or vegetables. Noodles, resilient and springy, provide a robust counterpoint to the rich broth. A rainbow of toppings graces the ramen bowl, each offering a unique revelation of textures and tastes. Roasted pork, succulent and tender, nestles alongside ramen eggs, their yolks a vibrant reminder of sunshine. A riot of vegetables, ranging from earthy mushrooms to vibrant greens, adds a refreshing crunch. The ritual of ramen is a revelation in itself. The aroma, redolent of savory delights, invites a sense of anticipation. The first slurp, a harmonious blend of broth and noodles, sets the stage for a remarkable culinary journey. Each subsequent bite, a revelation of textures and flavors, leaves a lasting impression.
            </p>
     
        </div>
        
        <p>
        howzit dun???
        </p>
    </div>
  )
}
