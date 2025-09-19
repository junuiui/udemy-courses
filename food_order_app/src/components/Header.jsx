//===================
// Imports
//===================
import logoImage from '../assets/logo.jpg';


/**
 * 
 * Header with image, cart Logic
 * @returns Header field
 */
export default function Header() {
  return (
    <header id="main-header">
      <div id='title'>
        <img src={logoImage} alt="logo" />
        <h1>Food Order Shop</h1>
      </div>
      <nav>
        <button>Cart</button>
      </nav>
    </ header>
  );
}