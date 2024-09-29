import Navbar from "@/Components/Navbar";
import Carousel from '@/Components/Carousel'
export default function Welcome() {
    const slides = [
        {
          url: '/images/slider1.webp',
          caption: 'Big Sale on Electronics!',
        },
        {
          url: '/images/slider2.webp',
          caption: 'Fashion Discounts up to 50%',
        },
        {
          url: '/images/slider3.webp',
          caption: 'Home & Furniture Mega Sale!',
        },
      ];
    return (
        <>
        <Navbar />
        <div className="container mx-auto">
             <Carousel slides={slides} />
        </div>
        </>
    )
}