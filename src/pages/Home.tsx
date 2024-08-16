import { Button } from "flowbite-react";
import MainNavBar from "../components/ui/MainNavbar";
import ReactCountryFlag from "react-country-flag"

import ethioCoders from "../assets/images/ethiopian-coder.png"
import ministryOfLabor from "../assets/images/1-768x239.png"
import primeMinister from "../assets/images/logo-768x146.png"
import ministryOfTech from "../assets/images/logo_7-removebg-preview.png"
import udacityLogo from "../assets/images/logo-udacity.png"



const Home = () => {
    return (
        <>
            <section className="mb-20 pb-5">
                <MainNavBar />
            </section>


            <section className="md:h-[calc(100vh-107px)] w-full ">
                <div className="container mx-auto p-3">

                    <div className="flex flex-col text-green-900 md:flex-row  gap-8">


                        <div className="md:w-1/2  md:h-[calc(100vh-107px)] md:pt-20 ">
                            <p className="font-mono text-xl font-bold uppercase"><ReactCountryFlag countryCode="ET" style={{
                                fontSize: '2em',
                                lineHeight: '2em',
                            }} /> 5 Million Ethiopian Coders</p>
                            <p className="w:3/4 md:w-11/12 text-5xl md:text-6xl font-bold tracking-widest font-mono uppercase">Advancing Digital Literacy for Ethiopia’s Youth</p>
                            <p className="pt-10 text-gray-400 font-mono">Acquire the essential digital skills necessary to establish a promising career in the ever-evolving technology industry with our comprehensive, fully-funded courses.</p>
                            <Button color="dark" className="mt-10 w-full md:w-auto font-mono ps-3 pe-3">Get Started</Button>
                        </div>


                        <div className="md:w-1/2 hidden md:flex  items-center  md:h-[calc(100vh-107px)]  ">
                            <img src={ethioCoders} className="rounded" alt="ethioCoders" />
                        </div>
                    </div>

                </div>
            </section>


            <section>
                <div className="container  p-5 mt-10 md:mt-0 rounded  mx-auto">

                    <div className="bg-teal-50 p-10 flex flex-col  md:flex-row gap-5 items-center">
                        <div className="md:w-full  flex w-full h-full justify-center items-center  ">
                            <img src={primeMinister} className="w-56 hover:w-72 hover:opacity-65 " alt="ministryOfLabor" />
                        </div>
                        <div className="md:w-full  flex w-full h-full justify-center items-center ">
                            <img src={ministryOfLabor} className="w-56 hover:w-60 hover:opacity-65" alt="ministryOfLabor" />
                        </div>
                        <div className="md:w-full  flex w-full h-full justify-center items-center ">
                            <img src={ministryOfTech} className="w-56 hover:w-72 hover:opacity-65" alt="ministryOfLabor" />
                        </div>
                    </div>

                </div>
            </section>

            {/** About Section */}

            <section className="container mx-auto mt-10">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2 p-5 ">
                        <div>
                            <span className="p-1 bg-yellow-400"></span>
                            <p className="uppercase inline ps-2 font-mono text-lg font-bold">About this Initiative</p>
                        </div>
                        <hr className="mt-3" />
                        <p className="text-slate-400 font-mono mt-4 md:mt-20">5 Million Ethiopian Coders is a joint initiative between the Government of Ethiopia and the Government of the United Arab Emirates. This program is an offshoot of the historic One Million Arab Coders program, which was announced in 2017 by His Highness Sheikh Mohammed Bin Rashid Al Maktoum at the World Economic Forum.
                            Ethiopian learners will have the opportunity to gain foundational level skills across three domains: Programming Fundamentals, Data Science Fundamentals and Android Kotlin Developer Fundamentals. Learners will be supported by mentors who will support them on a dedicated Community Platform to unblock technical questions on a daily basis throughout the 6-7 week course. Upon successful course completion, learners will be awarded with skill-based certifications.</p>
                            <Button color="dark" className="mt-10 w-full md:w-auto font-mono ps-3 pe-3">Know More</Button>
                    </div>
                    <div className="md:w-1/2 p-5">
                        <img src={udacityLogo} alt="udacityLogo" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;