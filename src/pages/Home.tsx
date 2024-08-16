import { Button } from "flowbite-react";
import MainNavBar from "../components/ui/MainNavbar";
import ReactCountryFlag from "react-country-flag"
import ethioCoders from "../assets/images/ethiopian-coder.png"
import { Card } from "flowbite-react";


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
                            <Button color="dark" className="mt-10 font-mono ps-3 pe-3">Get Started</Button>
                        </div>

                        
                        <div className="md:w-1/2 hidden md:flex  items-center  md:h-[calc(100vh-107px)]  ">
                            <img src={ethioCoders} className="rounded" alt="ethioCoders" />
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Home;