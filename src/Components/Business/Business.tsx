import './Business.css'
import { cards } from '../Work/workData'
import { FaRegHandshake } from "react-icons/fa";
import { features } from './businessData';


const Business = () => {
  return (
    <section className="business" id='business'>
        <div className="container">
            <div className="business-container">

               <div className="business-row1">

                <div className="business-content">
                  <FaRegHandshake className='handshake-icon' />
                  <h2>Start Your Own Business</h2>
                  <p>
                    Are you interested in growing your own vertical printing business in Asia Pacific?
                    With WallArtAsia; an Authorised Business Partner of the Asian Wallpen Distributor GIX
                    Nexus, you gain access to:
                  </p>
                  <ul className='bsns-cntnt-ul'>
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
                <div className="we-offer"> 
                  <h2>We Offer</h2>
                  <div className="features">
                    {features.map((feature) => (
                       <div className="feature-card" key={feature.id}>
                          <img src={feature.image} alt="img" className='feature-img' />
                          <h6 className='feature-heading'>{feature.title}</h6>
                       </div>
                    ))}
                  </div>
                </div>

               </div>

               <div className="business-row2">
                  {cards.map((card) => (
                    <div
                       className="card"
                       key={card.id}
                       style={{ backgroundImage: `url(${card.image})` }}
                     >
                       <div className="overlay">
          
                         <h3 className="title">{card.title}</h3>
          
                         <div className="hover-content">
                           <h3>{card.hoverTitle}</h3>
                           <p>{card.description}</p>
                         </div>
          
                       </div>
                     </div>
                    ))}
               </div>
                <button className='btn business-btn'>REQUEST A MEETING</button>

            </div>
        </div>
    </section>
  )
}

export default Business
