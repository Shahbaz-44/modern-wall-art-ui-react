import aboutImg from '../../assets/Images/Aboutimg.jpg'
import './About.css'

const About = () => {
  return (
    <section className='About-us'>
        <div className="container">
            <div className="about-container">
                <div className="left-img">
                    <img src={aboutImg} alt="img" />
                </div>
                <div className="right-content">
                    <h2>About Us</h2>
                    <p>Whether starting your own business or looking to enhance your walls
                     with stunning, high quality visual images, Wall Art Asia has the knowledge,
                     and experience to help you make it happen. <br />
                     Our diverse group of principals at WallArtAsia.com have a passion for creativity
                     and come to you with decades of experience developing printing and technology
                     opportunities for entrepreneurial adventurers in Asia Pacific. Wall Art Asia is
                     an Authorised Business Partner of GIX Nexus, the wallPen Master Distributor for
                     Asia Pacific.
                     </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About









