import porshe from "../assets/new.png";
import logoBmw from "../assets/BMW/bmwLogo.png";
import SuvBmw1 from "../assets/BMW/SUV/bmwSuv1.png";
import SuvBmw2 from "../assets/BMW/SUV/bmwSuv2.png";
import SuvBmw3 from "../assets/BMW/SUV/bmwSuv3.png";
import revuelto from "../assets/LAMBORGHINI/COUPE/Revuelto.png";
import m3 from "../assets/BMW/SEDANS/bmwM3.png";
import m4 from "../assets/BMW/SEDANS/M4.png";
import bmw330i from "../assets/BMW/SEDANS/330i.png";
import m2 from "../assets/BMW/COUPE/M2.png";
import m850I from "../assets/BMW/COUPE/M850I.png";
import logoAstonMartin from "../assets/ASTON-MARTIN/logo.png"
import astonMartinDb12 from "../assets/ASTON-MARTIN/COUPE/db12.png";
import vantage from "../assets/ASTON-MARTIN/COUPE/vantage.png";
import dbs from "../assets/ASTON-MARTIN/COUPE/dbs.png";
import dbx707 from "../assets/ASTON-MARTIN/SUV/dbx707.png";
import logoLamborghini from "../assets/LAMBORGHINI/logo.png";
import urus from "../assets/LAMBORGHINI/SUV/urus.png";
import aventador from "../assets/LAMBORGHINI/COUPE/aventador.png";
import huracan from "../assets/LAMBORGHINI/COUPE/huracan.png";
import logoMercedes from "../assets/MERCEDES/logo.png";
import g63 from "../assets/MERCEDES/SUV/g63.png";
import gla from "../assets/MERCEDES/SUV/gla.png";
import glc from "../assets/MERCEDES/SUV/glc.png";
import c63 from "../assets/MERCEDES/COUPE/c63.png";
import cla from "../assets/MERCEDES/COUPE/cla.png";
import cle from "../assets/MERCEDES/COUPE/cle.png";
import classeA from "../assets/MERCEDES/SEDAN/classeA.png";
import classeC from "../assets/MERCEDES/SEDAN/classeC.png";
import logoPorshe from "../assets/PORSHE/logo.png";
import macan from "../assets/PORSHE/SUV/macan.png";
import cayenne from "../assets/PORSHE/SUV/cayenne.png";
import panamera from "../assets/PORSHE/SEDAN/panamera.png";
import taycan from "../assets/PORSHE/SEDAN/taycan.png";
import gt3rs from "../assets/PORSHE/COUPE/gt3rs.png";
import porshe718 from "../assets/PORSHE/COUPE/porshe718.png";
import spider918 from "../assets/PORSHE/COUPE/spider918.png";
import { Swiper, SwiperSlide } from 'swiper/react'
import { useMobileStatus } from "./useMobileStatus";
import { useEffect, useState } from "react";
import Modal from "react-modal";


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

const cars = [
    {
        id: 0,
        marca: "ASTON MARTIN",
        logo: logoAstonMartin,
        types: [
            {
                id: 0,
                type: "SUV",
                models: [
                    { id: 0, src: dbx707, name: "DBX-707" }
                ]
            },
            {
                id: 1,
                type: "COUPE",
                models: [
                    { id: 0, src: vantage, name: "VANTAGE", },
                    { id: 1, src: dbs, name: "DBS" },
                    { id: 2, src: astonMartinDb12, name: "DB-12" }
                ]
            }
        ]
    },
    {
        id: 1,
        marca: "BMW",
        logo: logoBmw,
        types: [
            {
                id: 0,
                type: "SUV",
                models: [
                    { id: 0, src: SuvBmw1, name: "X6-M" },
                    { id: 1, src: SuvBmw2, name: "X3" },
                    { id: 2, src: SuvBmw3, name: "X5" }
                ]
            },
            {

                id: 1,
                type: "SEDANS",
                models: [
                    { id: 0, src: m3, name: "M3" },
                    { id: 1, src: m4, name: "M4" },
                    { id: 2, src: bmw330i, name: "330I" }
                ]
            },
            {
                id: 2,
                type: "COUPE",
                models: [
                    { id: 0, src: m2, name: "M2" },
                    { id: 1, src: m850I, name: "M-850I" }
                ]
            }
        ]
    },
    {
        id: 2,
        marca: "LAMBORGHINI",
        logo: logoLamborghini,
        types: [
            {
                id: 0,
                type: "SUV",
                models: [
                    { id: 0, src: urus, name: "URUS" }
                ]
            },
            {

                id: 1,
                type: "COUPE",
                models: [
                    { id: 0, src: revuelto, name: "REVUELTO" },
                    { id: 1, src: aventador, name: "AVENTADOR" },
                    { id: 2, src: huracan, name: "HURACAN" }
                ]
            },
        ]
    },
    {
        id: 3,
        marca: "MERCEDES-BENZ",
        logo: logoMercedes,
        types: [
            {
                id: 0,
                type: "SUV",
                models: [
                    { id: 0, src: g63, name: "G63" },
                    { id: 1, src: gla, name: "GLA" },
                    { id: 2, src: glc, name: "GLC" }
                ]
            },
            {

                id: 1,
                type: "SEDANS",
                models: [
                    { id: 0, src: classeA, name: "CLASSE A" },
                    { id: 1, src: classeC, name: "CLASSE C" }
                ]
            },
            {
                id: 2,
                type: "COUPE",
                models: [
                    { id: 0, src: c63, name: "C63" },
                    { id: 1, src: cla, name: "CLA" },
                    { id: 1, src: cle, name: "CLE" }
                ]
            }
        ]
    },
    {
        id: 4,
        marca: "POESHE",
        logo: logoPorshe,
        types: [
            {
                id: 0,
                type: "SUV",
                models: [
                    { id: 0, src: cayenne, name: "CAYENNE" },
                    { id: 1, src: macan, name: "MACAN" }
                ]
            },
            {

                id: 1,
                type: "SEDANS",
                models: [
                    { id: 0, src: panamera, name: "PANAMERA" },
                    { id: 1, src: taycan, name: "TAYCAN" }
                ]
            },
            {
                id: 2,
                type: "COUPE",
                models: [
                    { id: 0, src: gt3rs, name: "GT3-RS" },
                    { id: 1, src: porshe718, name: "718" },
                    { id: 1, src: spider918, name: "918 SPIDER" }
                ]
            }
        ]
    }


]

export function Main() {

    const mobile = useMobileStatus();

    const [suv, setSuv] = useState(false);
    const [sedan, setSedan] = useState(false);
    const [coupe, setCoupe] = useState(false);
    const [isOpen, setIsOpne] = useState(false)
    const [modalImage, setModalImage] = useState(null)

    function openModal(img) {
        setIsOpne(true);
        setModalImage(img);
    }
    function closeModal() {
        setIsOpne(false);
        setModalImage(null)
    }

    useEffect(() => {

        isOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

        return () => {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    return (
        <main className="bg-zinc-900/95 relative h-full w-full">
            <div className="absolute z-50">
                <Modal
                    isOpen={isOpen}
                    onRequestClose={closeModal}
                    className="h-screen w-full flex flex-col justify-center items-center bg-zinc-950/80">

                    <div className="lg:w-4/5 lg:m-auto lg:h-4/5 lg:relative lg:flex lg:justify-center lg:items-center lg:bg-zinc-50 lg:rounded-md p-2">

                        <button className="absolute top-1 right-1 bg-red-800 h-9 w-9 rounded-md text-zinc-50 text-xl" onClick={() => closeModal()}>X</button>

                        <div className="w-full">
                            <div>
                                <img src="" alt="imagem da marca" />
                            </div>
                            <div className="w-full h-auto">
                                {modalImage && <img src={modalImage} alt="carro" className="object-cover inset-0 rounded-md w-full" />}
                            </div>
                        </div>

                        <div className="bg-zinc-950/90 text-zinc-50 w-full h-auto flex flex-col justify-center lg:items-start gap-3 text-2xl p-3 rounded-md">
                            
                            <div className="flex ">
                                <h5>Cavalos de potencia:</h5>
                                <p>xxx</p>
                            </div>
                            <div className="flex">
                                <h5>Motor:</h5>
                                <p>xxx</p>
                            </div>
                            <div className="flex">
                                <h5>Tração:</h5>
                                <p>xxx</p>
                            </div>
                            <div className="flex">
                                <h5>Preço:</h5>
                                <p>xxx</p>
                            </div>

                            <button className="lg:absolute bg-zinc-50 text-zinc-900 p-3 bottom-10 rounded-md lg:bottom-3 lg:bg-black lg:text-zinc-50">
                                Comprar
                            </button>

                        </div>
                        
                    </div>


                </Modal>
            </div>

            <div className="relative z-0">

                <section className="w-full text-zinc-50 items-center justify-center flex flex-col">
                    <h1 className="py-2">N O V I D A D E S</h1>
                </section>


                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 2000 }}
                >
                    {slidersNovidades.map((item) => (

                        <SwiperSlide key={item.id}>
                            <img src={item.src} alt='Novidades' className=" h-56 sm:h-screen object-cover w-full" />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="h-24 flex flex-col ">
                    <div className="bg-[#CDCBCB] text-zinc-900 py-2 text-center w-full">
                        <h1>NOSSOS CARROS</h1>
                    </div>

                    <div className="text-zinc-50 flex items-center justify-center gap-12 h-11">

                        <div className="flex justify-center items-center gap-1">
                            <button className={"h-5 w-5 rounded-md duration-200 " + (!suv ? "bg-[#d4af37] shadow-inner shadow-zinc-900  " : "bg-zinc-50")} onClick={() => setSuv(!suv)}>
                            </button>
                            <h1>S U V</h1>
                        </div>

                        <div className="flex justify-center items-center gap-1">

                            <button className={"h-5 w-5 rounded-md duration-200 " + (!coupe ? "bg-[#d4af37] shadow-inner shadow-zinc-900  " : "bg-zinc-50")} onClick={() => setCoupe(!coupe)}>
                            </button>
                            <h1>C O U P E</h1>

                        </div>
                        <div className="flex justify-center items-center gap-1">

                            <button className={"h-5 w-5  rounded-md duration-200 " + (!sedan ? "bg-[#d4af37] shadow-inner shadow-zinc-900  " : "bg-zinc-50")} onClick={() => setSedan(!sedan)}>
                            </button>
                            <h1>S E D A N S</h1>

                        </div>
                    </div>
                </div>

                <div className="bg-zinc-300">
                    {cars.map((item) => (
                        <div key={item.id}>

                            <div className="sticky bg-[#D4D4D8] top-0 flex flex-col items-center justify-center py-2 z-10">
                                <img src={item.logo} alt="logo bmw" className=" h-12 w-auto sm:h-16 sm:w-auto" />
                                <h1>{item.marca}</h1>
                            </div>

                            {cars[item.id].types.map((type) => (

                                <div key={type.id} className={
                                    (suv && type.id === 0 ? "hidden" : "")
                                    +
                                    (sedan && type.id === 1 ? "hidden" : "")
                                    +
                                    (coupe && type.id === 2 ? "hidden" : "")}>

                                    <div className={(mobile ? "" : "h-full flex flex-col w-full justify-center items-center ")}>

                                        <h1 className="lg:w-3/4 top-28 bg-zinc-950 text-zinc-50 py-1 text-center px-3">{type.type}</h1>

                                        {mobile ?
                                            <Swiper
                                                slidesPerView={1}
                                                loop={true}
                                                navigation={true}
                                            >
                                                {cars[item.id].types[type.id].models.map((model) => (
                                                    <SwiperSlide key={model.id}>

                                                        <img src={model.src} alt='Novidades' className=" h-56 sm:h-screen object-cover w-full" />

                                                        <button className="absolute bottom-2 rounded-r-md bg-zinc-950 text-zinc-50 text-lg font-semibold px-8 py-2 shadow-stone-50 shadow-[0_0_2px] " onClick={() => openModal(model.src)}>

                                                            <span>

                                                                {model.name}

                                                            </span>


                                                        </button>

                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                            :
                                            <div className="w-3/4 h-screen flex justify-center items-center">

                                                {cars[item.id].types[type.id].models.map((model) => (
                                                    <div key={model.id} className="w-full relative duration-700 hover:duration-700 hover:w-[750rem]" onClick={() => openModal(model.src)}>
                                                        <img src={model.src} alt="" className="w-auto h-screen object-cover object-left cursor-pointer" />

                                                        <button className="w-full text-xl bg-zinc-50 text-zinc-950 font-semibold absolute bottom-5 py-1 " onClick={() => openModal(model.src)}>
                                                            {model.name}
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        }
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}