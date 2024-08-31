
import payWithVenmo from '../images/payWithVenmo.jpg'

export default function VenmoButton() {
  const venmoUsername = 'Trevor-Robison-1';

  const handleVenmoClick = () => {
    window.location.href = `https://venmo.com/${venmoUsername}`;
  };

  return (
    <div >
      <button onClick={handleVenmoClick} style={{ backgroundColor: '#000000', color: 'seagreen', fontFamily: 'courier', fontSize: 30}}>
      <img src={payWithVenmo} alt="" />
      </button>
    </div>
  );
}

