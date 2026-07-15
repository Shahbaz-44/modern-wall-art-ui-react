import './Footer.css'
import Logo from '../../assets/Images/Logo.png'
function Footer() {
  return (
    <div className='footer'>
        <div className="container">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={Logo} alt="Logo" className='footer-logo-img' />
                </div>
                <div className="footer-connect">
                    <h6>Let’s Connect</h6>
                    <p>enquiry@wallartasia.com</p>
                    <p>@wallartasia</p>
                </div>
                <div className="footer-contect">
                    <h6>WhatsApp Us</h6>
                    <p>Hong Kong: +85261127137</p>
                    <p>Singapore +6591727158</p>
                    <p>Australia +61437049897</p>
                </div>
            </div>
        </div>     
        <div className="footer-bottom">
             <p className='bottom-content'>
                 © 2026 Wall Art Asia – Speakeasy Media Private Limited
             </p>
        </div>
    </div>
  )
}

export default Footer