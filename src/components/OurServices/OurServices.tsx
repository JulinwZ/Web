import './OurServices.css'
import loupe from '../../assets/loupe.png'
import bottle from '../../assets/bottle.png'
import board from '../../assets/board.png'
import board2 from '../../assets/board2.png'
import board3 from '../../assets/board3.png'
import heal from '../../assets/heal.png'
import blue from '../../assets/blue.png'

const OurServices:React.FC = () => {
    return(
        <div className="OurServices">
            <div id='OurServices_balls' className="balls">
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
            <div className="title">Our services</div>
            <hr className='divider'/>
            <div className="service_describe">We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</div>
            <div className="cards">
                <img src={blue} alt="" className='blue'/>
                <div className="card">
                    <img src={loupe} alt="" className='card-photo'/>
                    <div className="operation">Search doctor</div>
                    <div className="details">Choose your doctor from thousands of specialist, general, and trusted hospitals</div>
                </div>
                <div className="card">
                    <img src={bottle} alt="" className='card-photo'/>
                    <div className="operation">Online pharmacy</div>
                    <div className="details">Buy your medicines with our mobile application with a simple delivery system</div>
                </div>
                <div className="card">
                    <img src={board} alt="" className='card-photo'/>
                    <div className="operation">Consultation</div>
                    <div className="details">Choose your doctor from thousands of specialist, general, and trusted hospitals</div>
                </div>
                <div className="card">
                    <img src={board2} alt="" className='card-photo'/>
                    <div className="operation">Details info</div>
                    <div className="details">Free consultation with our trusted doctors and get the best recomendations</div>
                </div>
                <div className="card">
                    <img src={heal} alt="" className='card-photo'/>
                    <div className="operation">Emergency care</div>
                    <div className="details">You can get 24/7 urgent care for yourself or your children and your lovely family</div>
                </div>
                <div className="card">
                    <img src={board3} alt="" className='card-photo'/>
                    <div className="operation">Tracking</div>
                    <div className="details">Track and save your medical history and health data</div>
                </div>
            </div>
            <div className="button" id='white_button'>Learn more</div>
        </div>
    );
}

export default OurServices;