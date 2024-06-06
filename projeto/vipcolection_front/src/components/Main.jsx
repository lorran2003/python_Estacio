import logoBmw from "../assets/BMW/bmwLogo.png";
import SuvBmw1 from "../assets/BMW/SUV/bmwSuv1.png";
import SuvBmw2 from "../assets/BMW/SUV/bmwSuv2.png";
import SuvBmw3 from "../assets/BMW/SUV/bmwSuv3.png";
import revuelto from "../assets/LAMBORGHINI/COUPE/Revuelto.jpg";
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
import urus from "../assets/LAMBORGHINI/SUV/urus.jpg";
import aventador from "../assets/LAMBORGHINI/COUPE/aventador.jpg";
import huracan from "../assets/LAMBORGHINI/COUPE/huracan.png";
import logoMercedes from "../assets/MERCEDES/logo.png";
import g63 from "../assets/MERCEDES/SUV/g63.png";
import gla from "../assets/MERCEDES/SUV/gla.jpeg";
import glc from "../assets/MERCEDES/SUV/glc.png";
import c63 from "../assets/MERCEDES/COUPE/c63.webp";
import cla from "../assets/MERCEDES/COUPE/cla.jpeg";
import cle from "../assets/MERCEDES/COUPE/cle.png";
import classeA from "../assets/MERCEDES/SEDAN/classeA.png";
import classeC from "../assets/MERCEDES/SEDAN/classeC.png";
import logoPorshe from "../assets/PORSHE/logo.png";
import macan from "../assets/PORSHE/SUV/macan.jpg";
import cayenne from "../assets/PORSHE/SUV/cayenne.jpg";
import panamera from "../assets/PORSHE/SEDAN/panamera.png";
import taycan from "../assets/PORSHE/SEDAN/taycan.png";
import gt3rs from "../assets/PORSHE/COUPE/gt3rs.png";
import porshe718 from "../assets/PORSHE/COUPE/porshe718.png";
import spider918 from "../assets/PORSHE/COUPE/spyder918.jpg";
import { Swiper, SwiperSlide } from 'swiper/react'
import { useMobileStatus } from "./useMobileStatus";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { SliderNovidades } from "./SlidersNovidades";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const cars = [
    {
        id: 0,
        marca: "ASTON MARTIN",
        logo: logoAstonMartin,
        types: [
            {
                id: 0,
                type: "SUV",
                class: "astonMartin",
                models: [
                    { id: 0, src: dbx707, name: "DBX-707", class: "cardAstonMartin" }
                ]
            },
            {
                id: 1,
                type: "COUPE",
                class: "astonMartin",
                models: [
                    { id: 0, src: vantage, name: "VANTAGE", class: "cardAstonMartin" },
                    { id: 1, src: dbs, name: "DBS", class: "cardAstonMartin" },
                    { id: 2, src: astonMartinDb12, name: "DB-12", class: "cardAstonMartin" }
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
                class: "BMW",
                models: [
                    { id: 0, src: SuvBmw1, name: "X6-M", class: "cardBmw" },
                    { id: 1, src: SuvBmw2, name: "X3", class: "cardBmw" },
                    { id: 2, src: SuvBmw3, name: "X5", class: "cardBmw" }
                ]
            },
            {

                id: 1,
                type: "SEDANS",
                class: "BMW",
                models: [
                    { id: 0, src: m3, name: "M3", class: "cardBmw" },
                    { id: 1, src: m4, name: "M4", class: "cardBmw" },
                    { id: 2, src: bmw330i, name: "330I", class: "cardBmw" }
                ]
            },
            {
                id: 2,
                type: "COUPE",
                class: "BMW",
                models: [
                    { id: 0, src: m2, name: "M2", class: "cardBmw" },
                    { id: 1, src: m850I, name: "M-850I", class: "cardBmw" }
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
                class: "lamborghini",
                models: [
                    { id: 0, src: urus, name: "URUS", class: "cardLamborghini" }
                ]
            },
            {

                id: 1,
                type: "COUPE",
                class: "lamborghini",
                models: [
                    { id: 0, src: revuelto, name: "REVUELTO", class: "cardLamborghini" },
                    { id: 1, src: aventador, name: "AVENTADOR", class: "cardLamborghini" },
                    { id: 2, src: huracan, name: "HURACAN", class: "cardLamborghini" }
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
                class: "mercedes",
                models: [
                    { id: 0, src: g63, name: "G63", class: "cardMercedes" },
                    { id: 1, src: gla, name: "GLA", class: "cardMercedes" },
                    { id: 2, src: glc, name: "GLC", class: "cardMercedes" }
                ]
            },
            {

                id: 1,
                type: "SEDANS",
                class: "mercedes",
                models: [
                    { id: 0, src: classeA, name: "CLASSE A", class: "cardMercedes" },
                    { id: 1, src: classeC, name: "CLASSE C", class: "cardMercedes" }
                ]
            },
            {
                id: 2,
                type: "COUPE",
                class: "mercedes",
                models: [
                    { id: 0, src: c63, name: "C63", class: "cardMercedes" },
                    { id: 1, src: cla, name: "CLA", class: "cardMercedes" },
                    { id: 2, src: cle, name: "CLE", class: "cardMercedes" }
                ]
            }
        ]
    },
    {
        id: 4,
        marca: "PORSCHE",
        logo: logoPorshe,
        types: [
            {
                id: 0,
                type: "SUV",
                class: "porsche",
                models: [
                    { id: 0, src: cayenne, name: "CAYENNE", class: "cardPorsche" },
                    { id: 1, src: macan, name: "MACAN", class: "cardPorsche" }
                ]
            },
            {

                id: 1,
                type: "SEDANS",
                class: "porsche",
                models: [
                    { id: 0, src: panamera, name: "PANAMERA", class: "cardPorsche" },
                    { id: 1, src: taycan, name: "TAYCAN", class: "cardPorsche" }
                ]
            },
            {
                id: 2,
                type: "COUPE",
                class: "porsche",
                models: [
                    { id: 0, src: gt3rs, name: "GT3-RS", class: "cardPorsche" },
                    { id: 1, src: porshe718, name: "718", class: "cardPorsche" },
                    { id: 2, src: spider918, name: "918 SPIDER", class: "cardPorsche" }
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
    const [isOpen, setIsOpen] = useState(false);
    const [modalImageCar, setModalImageCar] = useState(null);
    const [modalImageLogo, setModalImageLogo] = useState(null);

    function openModal(car, logo) {
        setIsOpen(true);
        setModalImageCar(car);
        setModalImageLogo(logo);
    }

    function closeModal() {
        setIsOpen(false);
        setModalImageCar(null);
        setModalImageLogo(null);
    }

    useEffect(() => {

        isOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

        return () => {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        const ct = gsap.context(() => {

            const blocoMarca = document.querySelectorAll(".blocoMarca");
            const logoMarca = document.querySelectorAll(".logoMarca");

            const boxAstonMartin = document.querySelectorAll(".astonMartin");
            const cardsAstonMartin = document.querySelectorAll(".cardAstonMartin");

            let animationAstonMartin = gsap.timeline({
                scrollTrigger: {
                    trigger: blocoMarca[0],
                    start: "top 80%"
                }
            })

            animationAstonMartin.to(logoMarca[0], { x: 0, opacity: 1 });

            boxAstonMartin.forEach((index) => {
                animationAstonMartin.to(index, { x: 0, opacity: 1 });
            });

            cardsAstonMartin.forEach((index) => {
                animationAstonMartin.to(index, { x: 0, opacity: 1 });
            });


            const boxBmw = document.querySelectorAll(".BMW");
            const cardsBmw = document.querySelectorAll(".cardBmw");

            let animationBmw = gsap.timeline({
                scrollTrigger: {
                    trigger: blocoMarca[1],
                    start: "top 80%",
                    end: "bottom 0%",
                }
            })

            animationBmw.to(logoMarca[1], { x: 0, opacity: 1 });

            boxBmw.forEach((index) => {
                animationBmw.to(index, { x: 0, opacity: 1 });
            });

            cardsBmw.forEach((index) => {
                animationBmw.to(index, { x: 0, opacity: 1 });
            });

            const boxLambo = document.querySelectorAll(".lamborghini");
            const cardsLambo = document.querySelectorAll(".cardLamborghini");

            let animationLambo = gsap.timeline({
                scrollTrigger: {
                    trigger: blocoMarca[2],
                    start: "top 80%",
                    end: "bottom 0%",
                }
            })

            animationLambo.to(logoMarca[2], { x: 0, opacity: 1 });

            boxLambo.forEach((index) => {
                animationLambo.to(index, { x: 0, opacity: 1 });
            });

            cardsLambo.forEach((index) => {
                animationLambo.to(index, { x: 0, opacity: 1 });
            });

            const boxMercedes = document.querySelectorAll(".mercedes");
            const cardsMercedes = document.querySelectorAll(".cardMercedes");

            let animationMercedes = gsap.timeline({
                scrollTrigger: {
                    trigger: blocoMarca[3],
                    start: "top 80%",
                    end: "bottom 0%",
                }
            })

            animationMercedes.to(logoMarca[3], { x: 0, opacity: 1 });

            boxMercedes.forEach((index) => {
                animationMercedes.to(index, { x: 0, opacity: 1 });
            });

            cardsMercedes.forEach((index) => {
                animationMercedes.to(index, { x: 0, opacity: 1 });
            });

            const boxPorsche = document.querySelectorAll(".porsche");
            const cardsPorsche = document.querySelectorAll(".cardPorsche");

            let animationPorsche = gsap.timeline({
                scrollTrigger: {
                    trigger: blocoMarca[4],
                    start: "top 80%",
                    end: "bottom 0%",
                }
            })

            animationPorsche.to(logoMarca[4], { x: 0, opacity: 1 });

            boxPorsche.forEach((index) => {
                animationPorsche.to(index, { x: 0, opacity: 1 });
            });

            cardsPorsche.forEach((index) => {
                animationPorsche.to(index, { x: 0, opacity: 1 });
            });
        })

        return () => { ct.revert() }
    }, [])

    return (
        <main className="bg-zinc-900/95 relative h-full w-full overflow-hidden">

            <div className="relative z-0">

                <SliderNovidades />

                <div className="h-24 flex flex-col sticky top-0 z-50">

                    <div className="bg-[#CDCBCB] text-zinc-900 py-2 text-center w-full">
                        <h1 className="text-2xl">Categorias</h1>
                    </div>

                    <div className="text-zinc-50 bg-zinc-800 flex items-center justify-center gap-12 h-11">

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

                <div className="h-full w-full bg-[#D4D4D8]">
                    {cars.map((item) => (
                        <div key={item.id} className="blocoMarca sm:flex sm:flex-col sm:items-center sm:justify-center w-full h-auto sm:gap-3 ">

                            <div className="logoMarca sticky top-24 z-10 bg-[#D4D4D8] sm:rounded-3xl p-2 flex flex-col items-center translate-x-full opacity-0">
                                <img src={item.logo} alt="logo bmw" className=" h-12 w-auto" />
                                <h1>{item.marca}</h1>
                            </div>


                            {item.types.map((type) => (

                                <div key={type.id} className={
                                    (suv && type.type === "SUV" ? "hidden" : "")
                                    +
                                    (sedan && type.type === "SEDANS" ? "hidden" : "")
                                    +
                                    (coupe && type.type === "COUPE" ? "hidden" : "")}>

                                    <div className={(mobile ? ` mt-2 translate-x-full opacity-0 ${type.class} ` : `h-full flex flex-col w-11/12 justify-center items-center bg-zinc-800 gap-2 m-auto rounded-md py-5 translate-x-full opacity-0 ${type.class} `)}>

                                        <h1 className="text-zinc-50 text-center text-2xl bg-zinc-800">{type.type}</h1>

                                        {mobile ?
                                            <Swiper
                                                slidesPerView={1}
                                                loop={true}
                                                navigation={true}
                                            >
                                                {type.models.map((model) => (
                                                    <SwiperSlide key={model.id} onClick={() => openModal(model.src, item.logo)}>

                                                        <div className={`${model.class} translate-x-full opacity-0`}>

                                                            <img src={model.src} alt='Novidades' className="h-auto w-auto" />

                                                            <button className="absolute bottom-2 rounded-r-md bg-zinc-800 text-zinc-50 text-lg font-semibold w-1/4 py-2 " onClick={() => openModal(model.src, item.logo)}>

                                                                <span>

                                                                    {model.name}

                                                                </span>


                                                            </button>
                                                        </div>

                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                            :
                                            <div className="w-11/12 h-auto flex justify-center items-center gap-2 ">

                                                {type.models.map((model) => (

                                                    <div key={model.id} className={`${model.class} w-full h-auto relative duration-200 hover:duration-200 hover:opacity-75 translate-x-full opacity-0`} onClick={() => openModal(model.src, item.logo)}>

                                                        <img src={model.src} alt="" className="w-auto h-auto object-cover cursor-pointer rounded-md" />

                                                        <button className="absolute bottom-2 rounded-r-md bg-zinc-800 text-zinc-50 text-lg font-semibold w-2/5 py-2  " onClick={() => openModal(model.src, item.logo)}>

                                                            <span>

                                                                {model.name}

                                                            </span>


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

            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                className="h-screen w-full flex flex-col justify-center items-center bg-zinc-400 z-50">

                <div className="pt-4">
                    {modalImageLogo && <img src={modalImageLogo} alt="imagem da marca" className="h-16" />}
                </div>

                <div className="lg:w-4/5 lg:m-auto lg:h-4/5 lg:relative lg:flex lg:justify-center lg:items-center lg:bg-zinc-800 lg:rounded-md p-2">

                    <button className="absolute top-1 right-1 bg-red-800 h-9 w-9 rounded-md text-zinc-50 text-xl" onClick={() => closeModal()}>X</button>

                    <div className="w-full h-auto">
                        {modalImageCar && <img src={modalImageCar} alt="carro" className="object-cover inset-0 rounded-t-md w-full lg:rounded-md" />}
                    </div>

                    <div className="bg-zinc-950/90 lg:bg-transparent text-zinc-50 w-full h-auto flex flex-col justify-center lg:items-start gap-3 text-2xl p-3 rounded-b-md">

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

                        {/* botão para comprar */}
                        <button className="lg:absolute bg-zinc-50 text-zinc-900 p-3 bottom-10 rounded-md lg:bottom-3" onClick="">
                            Comprar
                        </button>

                    </div>
                </div>
            </Modal>
        </main>
    )
}