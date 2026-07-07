import './Hero.css'
import slide1 from "../../assets/Videos/hero01.mp4";
// import slide2 from "../../assets/Videos/hero2.mp4";
// import slide3 from "../../assets/Videos/hero3.mp4";

const Hero = () => {
  return (
    <section className='hero'>
        <div className='video-slider'>
          <video
          className='slide1'
          autoPlay
          muted
          loop
          playsInline >
          <source src={slide1} type="video/mp4" />                   
          </video>
        </div>
        <div className='hero-content'>
            <h5 className='sub-heading'>NOW IN ASIA-PACIFIC</h5>
            <h1>Innovative Vertical Printing</h1>
            <h6>If you can dream it, we can print it</h6>
            <div className='hero-btn'>
                <button className='btn'>view Portfolio</button>
                <button className='btn-black'>Request A Quote</button>
            </div>          
        </div>

    </section>
  )
}

export default Hero
