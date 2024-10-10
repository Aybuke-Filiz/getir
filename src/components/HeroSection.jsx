import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function HeroSection() {
   const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="relative   before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full">
    <Slider {...settings}>
      <div>
     <img  className="w-full h-[500px] object-cover" src="https://swipeline.co/cdn/2023/03/kvkkgetirbitaksisahibinden.webp"/>
     </div>
     <div>
      <img className="w-full h-[500px]  object-cover" src="https://www.getirfinans.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fbanner_slide_001.ca9d4d4a.jpg&w=3840&q=75"/>
     </div>
    </Slider>
    </div>
  );
}

export default HeroSection;