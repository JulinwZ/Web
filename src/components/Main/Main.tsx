import header_photo from '../../assets/header.png';
import './Main.css'

const Main: React.FC = () => {
    return (
        <div className='header-description'>
            <div id='main_balls' className="balls">
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
            </div>
            <div className="header-text-description">
                <div className="bold_text">Virtual healthcare for you</div>
                <div className="gray_text">Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone</div>
                <div className="button">Consult today</div>
            </div>
            <img className='header_photo' src={header_photo} alt="header_photo" />
        </div>
    );
}

export default Main;