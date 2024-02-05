import './Header.css'

const Header: React.FC = () => {
    return (
        <header>
            <div className="logo-container">
                <div className="circle-logo">T</div>
                <div className="text-logo">HealthCare</div>
            </div>
            <nav>
                <ul>
                    <li className='home'>Home</li>
                    <li>Find a doctor</li>
                    <li>Apps</li>
                    <li>Testimonials</li>
                    <li>About us</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
