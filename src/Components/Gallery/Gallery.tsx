import {cards} from './galleryData'
import { IoPlayCircleOutline } from "react-icons/io5";
import { RiCloseLine } from "react-icons/ri";
import { useState } from 'react';
import './Gallery.css'

const Gallery = () => {
    const [open, setOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState("");

    const handlePlay = (video:string) => {
      setSelectedVideo(video);
      setOpen(true);
    };

    const handleClose = () => {
      setSelectedVideo("");
      setOpen(false);
    };

  return (
    <section className='gallery'>
        <div className="container">

            <div className="gallery-heading">
                <h2>Gallery</h2>
            </div>

            <div className="gallery-container">
              <div className="row1">
                 <div className="first-left">  
                   {cards.slice(0, 2).map((card)=>(
                     <div 
                       className="card"
                       key={card.id}
                       style={{backgroundImage: `url(${card.image})`}}
                       >
                       <div className="overlay">
   
                         <IoPlayCircleOutline
   
                         className='play-icon'
                         onClick={() => handlePlay(card.video)}  
                         role='button'
                         tabIndex={0}
                         />
   
                         <h5 className='titlee'>{card.title}</h5>
                       </div>
                     </div>
                   ))}
                 </div>
                 <div className="first-right">
                   {cards.slice(2, 4).map((card)=>(
                     <div 
                       className="card double-card"
                       key={card.id}
                       style={{backgroundImage: `url(${card.image})`}}
                       >
                       <div className="overlay">
   
                         <IoPlayCircleOutline
                         className='play-icon'
                         onClick={() => handlePlay(card.video)}  
                         role='button'
                         tabIndex={0}
                         />
   
                         <h5 className='titlee'>{card.title}</h5>
                       </div>
                     </div>
                   ))}
                 </div>
              </div>
              <div className="row2">
                 <div className="second-left">  
                   {cards.slice(4, 6).map((card)=>(
                     <div 
                       className="card"
                       key={card.id}
                       style={{backgroundImage: `url(${card.image})`}}
                       >
                       <div className="overlay">
   
                         <IoPlayCircleOutline
   
                         className='play-icon'
                         onClick={() => handlePlay(card.video)}  
                         role='button'
                         tabIndex={0}
                         />
   
                         <h5 className='titlee'>{card.title}</h5>
                       </div>
                     </div>
                   ))}
                 </div>
                 <div className="second-right">
                   {cards.slice(6, 8).map((card)=>(
                     <div 
                       className="card double-card"
                       key={card.id}
                       style={{backgroundImage: `url(${card.image})`}}
                       >
                       <div className="overlay">
   
                         <IoPlayCircleOutline
                         className='play-icon'
                         onClick={() => handlePlay(card.video)}  
                         role='button'
                         tabIndex={0}
                         />
   
                         <h5 className='titlee'>{card.title}</h5>
                       </div>
                     </div>
                   ))}
                 </div>
              </div>
            </div> { open && (
              <div className="video-popup"
              onClick={handleClose}
              >
                <div className="video-content"
                onClick={(e)=>e.stopPropagation()}
                >
                  <RiCloseLine
                  onClick={handleClose}
                  className='close-icon'
                  />

                <iframe
                    src={selectedVideo}
                    allowFullScreen
                    allow="autoplay; encrypted-media"
                    referrerPolicy="strict-origin-when-cross-origin"
                />
                </div>
              </div>
            )}

        </div>
    </section>
  )
}

export default Gallery
