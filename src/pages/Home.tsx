import { Button, TextInput } from "flowbite-react";
import MainNavBar from "../components/ui/MainNavbar";
import ReactCountryFlag from "react-country-flag"

import ethioCoders from "../assets/images/ethiopian-coder.png"
import ministryOfLabor from "../assets/images/1-768x239.png"
import primeMinister from "../assets/images/logo-768x146.png"
import ministryOfTech from "../assets/images/logo_7-removebg-preview.png"
import udacityLogo from "../assets/images/logo-udacity.png"
import AboutCard from "../components/ui/AboutCard";
import InfoCard from "../components/ui/InfoCard";
import { HiOutlineMail } from "react-icons/hi";
import MainFooter from "../components/ui/MainFooter";



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

                    <div className="bg-green-50 p-10 flex flex-col  md:flex-row gap-5 items-center">
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
                            <span className="p-1 bg-green-400"></span>
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

            {/** Description Section */}

            <section className="container mx-auto mt-10 ">
                <div className="flex flex-col md:flex-row  p-5 gap-3">
                    <div className="md:w-1/4  p-5">
                        <AboutCard title="Android Developer Fundamentals" body="This track aims to teach you the core fundamentals of Android development" className="mb-5 bg-green-400" />
                        <AboutCard title="Programming Fundamentals" body="This track aims to teach you the core fundamentals of web development" className="bg-red-400" />
                    </div>
                    <div className="md:w-1/4  md:flex items-center p-5">
                        <AboutCard title="Data Sciences Fundamentals" body="This track aims to teach you the core fundamentals of Data Analysis" className="bg-yellow-300" />
                    </div>


                    <div className="md:w-1/2  p-5">
                        <div>
                            <span className="p-1 bg-green-400"></span>
                            <p className="uppercase inline ps-2 font-mono text-lg font-bold">Descriptions</p>
                        </div>
                        <hr className="mt-3" />
                        <p className="font-mono uppercase font-bold text-5xl mt-4 mb-8 md:mt-10 text-green-900">Courses</p>
                        <p className="text-slate-400 font-mono  ">5 Million Ethiopian Coders is a joint initiative between the Government of Ethiopia and the Government of the United Arab Emirates. This program is an offshoot of the historic One Million Arab Coders program, which was announced in 2017 by His Highness Sheikh Mohammed Bin Rashid Al Maktoum at the World Economic Forum.
                            Ethiopian learners will have the opportunity to gain foundational level skills across three domains: Programming Fundamentals, Data Science Fundamentals and Android Kotlin Developer Fundamentals. Learners will be supported by mentors who will support them on a dedicated Community Platform to unblock technical questions on a daily basis throughout the 6-7 week course. Upon successful course completion, learners will be awarded with skill-based certifications.</p>
                        <Button color="dark" className="mt-10 w-full md:w-auto font-mono ps-3 pe-3">Know More</Button>
                    </div>
                </div>
            </section>


            {/** How it Works */}
            <section className="container mx-auto mt-10">
                <p className="font-mono text-center text-gray-400">Ethiopian Coders Initiative is an online platform</p>
                <p className="font-mono text-center text-green-900 text-6xl uppercase font-bold mt-3">HOW IT WORKS</p>

                <div className="flex justify-center flex-col md:flex-row  mt-24 gap-6 ">
                    <div className="md:w-1/3 flex justify-center">
                        <InfoCard className="shadow border-spacing-48"  title="ENROLLMENT" body="Select track of your choice, sign up, and take the course for free" />
                    </div>

                    <div className="md:w-1/3 flex justify-center">
                        <InfoCard className="shadow border-spacing-48"  title="COMMUNITY" body="Join the community platform online to get support from other students as well as tutors." />
                    </div>

                    <div className="md:w-1/3 flex justify-center">
                        <InfoCard className="shadow border-spacing-48"  title="CERTIFICATE" body="Complete the course and get a certification assessment." />
                    </div>
                </div>
            </section>
            

            {/** Subscribe News */}
            <section className="container mx-auto mt-20 ">
                <div className="flex flex-col md:flex-row mt-20  rounded gap-6 bg-green-50 m-3 md:p-3">

                    <div className="md:w-1/2  p-5">
                        <p className="text-bold uppercase text-3xl font-mono text-center font-bold text-green-900">JOIN 5M+ Developers</p>
                        <p className="font-mono text-gray-400 text-center">Stay in the loop with everything you need to know</p>
                    </div>

                    <div className="md:w-1/2 flex p-5 gap-6">
                       <div className="w-3/4"><TextInput placeholder="Enter your email" icon={HiOutlineMail} type="text" sizing="md" /></div>
                        <div className="w-1/4"><Button className="w-full" color="dark">Subscribe</Button></div>
                    </div>


                </div>
            </section>


            {/** Footer */}
            <section className="mt-20">
                 <MainFooter />
            </section>
        </>
    );
}

export default Home;