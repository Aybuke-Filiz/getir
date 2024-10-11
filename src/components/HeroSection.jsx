import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";


function HeroSection() {
  const [selected, setSelected] = useState("TR");

  const phones={
    US:"+1",
    GB:"+44",
    FR:"+33",
    DE:"+49",
    IT:"+70",
    TR:"+90",
  };

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
      <h4 className="text-primary-brand-color text-center font-semibold mb-4">Giriş yap veya kayıt ol</h4>
      <div className="grid gap-y-4">
      <div className="flex gap-x-2">
        <ReactFlagsSelect
      countries={Object.keys(phones)}
       customLabels={phones}
        onSelect={(code) => setSelected(code)}
        selected={selected}
        className="flag-select"/>
        <label className="flex-1 relative block cursor-pointer">
          <input required className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors hover:border-primary-brand-color 
          outline-none focus:border-primary-brand-color peer text-sm pt-2"/>
          <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7
           peer-focus:text-primary-brand-color peer-focus:text-sm  peer-valid:h-7 peer-valid:text-primary-brand-color
            peer-valid:text-sm">Telefon Numarası</span>
        </label>
</div>
<button className="bg-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold text-primary-brand-color 
transition-colors hover:bg-primary-brand-color hover:text-brand-yellow">
  Telefon numarası ile devam et
</button>
</div>
    </div>
    </div>
    </div>
  );
}

export default HeroSection;