import './header.css';
import funny from "../../assets/funny.png";

const Header = () => {
    return (
        <nav className='header-container my-4 d-flex justify-content-between align-items-center'>
            <img className='logo' src={funny} width={60} alt="" />
            <ul className='nav-links-ul d-flex align-items-center m-0'>
                <li className='mx-2'>Emotions</li>
                <li className='mx-2'>Manifesto</li>
                <li className='mx-2'>Self-awareness test</li>
                <li className='mx-2'>Work With Us</li>
            </ul>
            <div>
                <button className='download-app-btn'>Download app</button>
            </div>
        </nav>
    );
}

export default Header;