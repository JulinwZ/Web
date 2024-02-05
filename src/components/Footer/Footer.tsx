import './Footer.css'

const Footer:React.FC = () => {
    return(
        <div className="container_footer">
            <div className="first_column">
                <div className="label">
                    <div className="icon">T</div>
                    <div className="icon_text">HealthCare</div>
                </div>
                <div className="label_text2">HealthCare provides progressive, and affordable healthcare, accessible on mobile and online for everyone</div>
                <div className="copyright">©HealthCare PTY LTD 2023. All rights reserved</div>
            </div>
            <div className="column">
                <div className="top">Company</div>
                <ul>
                    <li>About</li>
                    <li>Testimonials</li>
                    <li>Find a doctor</li>
                    <li>Apps</li>
                </ul>
            </div>
            <div className="column">
                <div className="top">Region</div>
                <ul>
                    <li>Indonesia</li>
                    <li>Singapore</li>
                    <li>Hongkong</li>
                    <li>Canada</li>
                </ul>
            </div>
            <div className="column">
                <div className="top">Help</div>
                <ul>
                    <li>Helo center</li>
                    <li>Contact center</li>
                    <li>Instructions</li>
                    <li>How it works</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;