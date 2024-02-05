import  './Slider.css'
import avatar from '../../assets/avatar.png'
import arrowleft from '../../assets/arrowleft.png'
import arrowright from '../../assets/arrowright.png'


const Slider: React.FC = () => {
    return(
        <div className='container'>
            <div className="slider">
                <div className="slider_title">What our customer are saying</div>
                <div className="divider"></div>
                <div className="slider_info">
                    <img src={avatar} alt="" />
                    <div className='name_container'>
                        <div className="name">Edward Newgate</div>
                        <div className="lastname">Founder Circle</div>
                    </div>
                    <div className="slider_info_text">“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”</div>
                </div>
            </div>
            <div className="arrow-container">
                <img id='leftarrow' src={arrowleft} alt="" />
                <div className="ball" id='slider_first_ball'></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <img id='rightarrow' src={arrowright} alt="" />
            </div>
        </div>
    );
}

export default Slider;