// import sectorWall from '../../assets/Images/sector-sec-img1.jpg'
// import sectorArt from '../../assets/Images/Sector-sec-img2.jpg'
import './Sectors.css'


const Sectors = () => {
  return (
    <section className="sectors" id='sectors'>
        <div className="container">
            <div className="sectors-grid">

                <div className="sector-img">
                    <h1 className='sector-wall-text'>WALL</h1>
                </div>
                <div className="sector-content">
                    <h2>
                        For Interior Designers, Artists & Creative Agencies
                    </h2>
                    <p>
                        Until now, vertical printing has long been the domain of artists and wallpaper specialists.
                        Today, with wallPen technology, we are bringing you the fastest, most reliable,
                        least invasive, and highest quality printing for your next project:
                    </p>                                    
                    <div className="list">
                        <ul>
                           <li>Wall art & murals</li>
                           <li>Office branding</li>
                           <li>High-visibility signage</li>
                           <li>Event décor</li>
                        </ul>
                        <ul>
                            <li>Retail branding</li>
                            <li>Decorating small spaces</li>
                            <li>Exhibit labels</li>
                            <li>Artistic feature walls</li>
                        </ul>
                    </div>
                </div>
                <div className="sector-img">
                    <h1 className='sector-art-text'>
                        ART <span className="sector-asia-text">ASIA</span>
                    </h1>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Sectors
