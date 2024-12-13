
import './MusicPage.css'
import DashboardNavBar from "../components/DashboardNavBar";
import Footer from '../components/Footer';


export default function ImagesPage() {

  const speakSlug = () => {
    const utterance = new SpeechSynthesisUtterance('slug licker will lick your slugs, and your neighbors slugs');

    window.speechSynthesis.speak(utterance)
  }

  return (
    <div style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#000000',
        color: 'white'
    }}>
        <DashboardNavBar/>

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh'}}>
    <h3 style={{ fontFamily: 'courier' }}>Hear Here...</h3>
    <a onClick={speakSlug} href="https://sluglicker.bandcamp.com/album/in-the-glowing-city" target="_blank" style={{ fontFamily: 'courier' }}>SLUGLICKER</a> 
</div>
         
        <Footer />
    </div>
  )
}
