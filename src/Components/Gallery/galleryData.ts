import gallery1 from '../../assets/Images/gallery1.jpg'
import gallery2 from '../../assets/Images/gallery2.jpg'
import gallery3 from '../../assets/Images/gallery3.jpg'
import gallery4 from '../../assets/Images/gallery4.jpg'
import gallery5 from '../../assets/Images/gallery5.jpg'
import gallery6 from '../../assets/Images/gallery6.jpg'
import gallery7 from '../../assets/Images/gallery7.jpg'
import gallery8 from '../../assets/Images/gallery8.jpg'



type GalleryCard = {
    id:number;
    image:string;
    title:string;
    video:string;
}

 export const cards : GalleryCard[] = [
    {
     id: 1,
     image: gallery1,
     title: "Museum",
     video: "https://www.youtube.com/embed/QRIqRKWPDIw?feature=oembed?playlist=QRIqRKWPDIw&mute=0&autoplay=1&loop=no&controls=1&start=0&end="
   },
    {
     id: 2,
     image: gallery2,
     title: "Creative Agency",
     video: "https://www.youtube.com/embed/QO8kHwlDs1U?feature=oembed?playlist=QO8kHwlDs1U&mute=0&autoplay=1&loop=no&controls=1&start=0&end="
   },
    {
     id: 3,
     image: gallery3,
     title: "Office Interior",
     video: "https://www.youtube.com/embed/siVjC7E1Yb4?feature=oembed?playlist=siVjC7E1Yb4&mute=0&autoplay=0&loop=no&controls=1&start=0&end="
   },
    {
     id: 4,
     image: gallery4,
     title: "Office Interior",
     video: "https://www.youtube.com/embed/PDzSQ2e1oQs?feature=oembed?playlist=PDzSQ2e1oQs&mute=0&autoplay=0&loop=no&controls=1&start=0&end="
   },
    {
     id: 5,
     image: gallery5,
     title: "Hotel & Spa",
     video: "https://www.youtube.com/embed/J5dNryW5adg?feature=oembed?playlist=J5dNryW5adg&mute=0&autoplay=1&loop=no&controls=1&start=0&end="
   },
    {
     id: 6,
     image: gallery6,
     title: "Museum",
     video: "https://www.youtube.com/embed/b3Optz6sNr8?feature=oembed?playlist=b3Optz6sNr8&mute=0&autoplay=1&loop=no&controls=1&start=0&end="
   },
    {
     id: 7,
     image: gallery7,
     title: "Hospitality",
     video: "https://www.youtube.com/embed/rjaPgGVzGdg?feature=oembed?playlist=rjaPgGVzGdg&mute=0&autoplay=1&loop=no&controls=1&start=0&end="
   },
    {
     id: 8,
     image: gallery8,
     title: "Office Interior",
     video: "https://www.youtube.com/embed/brLOvlaqyo0?feature=oembed?playlist=brLOvlaqyo0&mute=0&autoplay=1&loop=no&controls=1&start=0&end="
   },
];