import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";


function HeroSection() {
  const [selected, setSelected] = useState("");

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
     <img  className="w-full h-[500px] object-cover" />
     </div>
     <div >
      <img className="w-full h-[500px]  object-cover" />
     </div>
    </Slider>
    <div className="container flex gap-y-8 justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
    <div>
    <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />
                    <h3 className="text-4xl mt-8 font-semibold text-white">
                        Dakikalar içinde <br /> kapınızda <br />
                    </h3>
    </div>
    <div className="w-[400px] rounded-lg bg-gray-50 p-6">
      <h4 className="text-primary-brand-color text-center font-semibold">Giriş yap veya kayıt ol</h4>
      <div className="flex">
        <ReactFlagsSelect
      countries={["US", "GB", "FR", "DE", "IT"]}
       customLabels={{ US: "EN-US", GB: "EN-GB", FR: "FR", DE: "DE", IT: "IT" }}
        placeholder="Select Language"/>
</div>
    </div>
    </div>
    </div>
  );
}

export default HeroSection;