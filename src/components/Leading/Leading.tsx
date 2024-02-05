import './Leading.css'
import leading from '../../assets/leading.png'

const Leading: React.FC = () => {
    return(
        <div className='leading'>
            <div id='leading_balls' className="balls">
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
            <img src={leading} alt="" />
            <div className="leading_info">
                <div className="title">Leading healthcare providers</div>
                <div className="divider"></div>
                <div id='leading_describe' className="service_describe">We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</div>
                <div className="button" id='white_button'>Learn more</div>
            </div>
        </div>
    );
}

export default Leading;