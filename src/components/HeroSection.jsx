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
    <div className="relative h-[500px]  before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full">
    <Slider {...settings}>
      <div>
     <img  className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg"/>
     </div>
     <div>
      <img className="w-full h-[500px]  object-cover" src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg"/>
     </div>
    </Slider>
    <div className="container flex gap-y-8 justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
    <div>
    <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />
                    <h3 className="text-4xl mt-8 font-semibold text-white">
                        Dakikalar içinde <br /> kapınızda <br />
                    </h3>
    </div>
    </div>
    </div>
  );
}

export default HeroSection;