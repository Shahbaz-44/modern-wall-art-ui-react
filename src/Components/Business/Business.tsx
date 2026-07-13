import './businessData'
import './Business.css'
import { FaRegHandshake } from "react-icons/fa";


const Business = () => {
  return (
    <section className="business">
        <div className="container">
            <div className="business-container">
                <div className="business-content">
                  <FaRegHandshake />
                  <h2>Start Your Own Business</h2>
                  <p>
                    Are you interested in growing your own vertical printing business in Asia Pacific?
                    With WallArtAsia; an Authorised Business Partner of the Asian Wallpen Distributor GIX
                    Nexus, you gain access to:
                  </p>
                  <ul>
                    <li>Made-in-Germany vertical printing technology</li>
                    <li>Robust turnkey support</li>
                    <li>Business development support</li>
                    <li>Training and technical support</li>
                    <li>Dedicated customer success resources</li>
                  </ul>
                  <p>Accelerate your path to business success by joining our customer
                     connect network
                  </p>
                </div>
                <div className="we-offer"></div>
            </div>
        </div>
    </section>
  )
}

export default Business
