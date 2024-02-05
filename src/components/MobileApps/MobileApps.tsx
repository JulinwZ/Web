import './MobileApps.css'
import mobileapps from '../../assets/mobileapps.png'

const MobileApps:React.FC = () => {
    return(
        <div className='mobileapps'>
            <div className="mobileapps_info">
                <div className="title">Download our mobile apps</div>
                <div className="divider"></div>
                <div id='mobileapps_describe' className="service_describe">Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</div>
                <div className="button" id='white_button'>Download</div>
            </div>
            <img src={mobileapps} alt="" />
        </div>
    );
}

export default MobileApps;