import Navbar from "@/Components/Navbar";
import Carousel from '@/Components/Carousel';
import Footer from '@/Components/Footer';
import CateogryProduct from "@/Components/CateogryProduct.jsx";
export default function Welcome() {
    const appName = import.meta.env.VITE_APP_NAME;
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
        <Navbar appName={appName} />
        <div className="container mx-auto">
             <Carousel slides={slides} />
        </div>
            <CateogryProduct />
            <Footer appName={appName}/>
        </>
    )
}
