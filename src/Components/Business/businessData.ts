import feature1 from '../../assets/Images/features-1.png'
import feature2 from '../../assets/Images/features-2.png'
import feature3 from '../../assets/Images/features-3.png'
import feature4 from '../../assets/Images/features-4.png'
import feature5 from '../../assets/Images/features-5.png'
import feature6 from '../../assets/Images/features-6.png'

type businessFeatures = [
    id:number,
    image:string,
    title:string,
]

export const features : businessFeatures [] = [
    {
     id: 1,
     image: feature1 ,
     title: "Go-to-market planning",
   },
    {
     id: 2,
     image: feature2 ,
     title: "Operator selection & training",
   },
    {
     id: 3,
     image: feature3 ,
     title: "Certification",
   },
    {
     id: 4,
     image: feature4 ,
     title: "Graphic design",
   },
    {
     id: 5,
     image: feature5 ,
     title: "Financing",
   },
    {
     id: 6,
     image: feature6 ,
     title: "Customer Connect Network",
   },
]