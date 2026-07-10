import {cards} from './galleryData'
import { FaPlayCircle } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { useState } from 'react';

const Gallery = () => {
    const [open, setOpen] = useState(false);
    // cosnt [selectedVideo, setSelectedVideo] = useState("");

    // cosnt handlePlay = (videourl) => {
    //   setSelecetedVideo(videourl);
    //   setOpen(true);
    // };

  return (
    <section className='gallery'>
        <div className="container">

            <div className="gallery-heading">
                <h2>Gallery</h2>
            </div>

            <div className="gallery-container">
                {cards.map((card)=>(
                  <div 
                    className="card"
                    key={card.id}
                    style={{backgroundImage: `url(${card.image})`}}
                    >
                    <div className="overlay">

                      <FaPlayCircle className='play-icon' />
                      <RiCloseLine className='close-icon' />
                      <iframe src={card.video}></iframe>

                      <h3>{card.title}</h3>
                    </div>
                  </div>
                ))}
            </div>

        </div>
    </section>
  )
}

export default Gallery
