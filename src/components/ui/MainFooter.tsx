"use client";

import { Footer } from "flowbite-react";
import ethioCoderLogo from "../../assets/images/ethio-coder-light.png"
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";


const MainFooter = () => {
    return (
        <>
            <Footer className="bg-green-900" container>

                <div className="flex flex-col w-full justify-center ">
                    <div className="flex justify-center ">
                        <img src={ethioCoderLogo} className="w-72" alt="ethioCoderLogo" />
                    </div>
                    <div className="flex text-white flex-row gap-6 w-full  justify-center mt-10">
                        <FaFacebook/>
                        <FaTwitter />
                        <FaLinkedin />
                    </div>

                    <p className="text-center font-mono mt-10 mb-10 text-white">Copyright © 2024  Ministry of Labor and Skills – Ethiopia  – All rights reserved</p>
                </div>



            </Footer>
        </>
    );
}

export default MainFooter;