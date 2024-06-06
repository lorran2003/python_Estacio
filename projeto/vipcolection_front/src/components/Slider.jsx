import {Swiper, SwiperSlide} from "swiper/react";

import porshe from "../assets/Porsche_novidade.jpg";
import revuelto from "../assets/lambo_revuelto_novidades.webp";
import m3 from "../assets/bmw_novidades.webp";
import astonMartinDb12 from "../assets/db12_novidades.jpg";

//array com sliders
const slidersNovidades = [
    {
        id: 0,
        src: revuelto,
    },
    {
        id: 1,
        src: m3,
    },
    {
        id: 2,
        src: astonMartinDb12,
    },
    {
        id: 3,
        src: porshe
    },
]

export function Slider() {
    return (

        <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2000 }}
        >
            {slidersNovidades.map((item) => (

                <SwiperSlide key={item.id}>
                    <img src={item.src} alt='Novidades' className="h-auto object-cover w-auto" />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}