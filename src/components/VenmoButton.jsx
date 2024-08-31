
export default function VenmoButton() {
  const venmoUsername = 'Trevor-Robison-1';

  const handleVenmoClick = () => {
    window.location.href = `https://venmo.com/${venmoUsername}`;
  };

  return (
    <div>
      <button onClick={handleVenmoClick}>
        Pay with Venmo
      </button>
    </div>
  );
}

