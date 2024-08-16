"use client";

import logoImg from "../../assets/images/eci_logo-1.png"
import arabImg from "../../assets/images/Frame-1000003487.png"
import {Navbar } from "flowbite-react";

const MainNavBar = () => {
    return (
        <Navbar  className="border fixed top-0 left-0 right-0 z-50 bg-gray-50" fluid rounded>
            <Navbar.Brand href="https://flowbite-react.com">
                <img src={logoImg} className="ms-10 h-10 sm:h-12" alt="ethio coder Logo" />
            </Navbar.Brand>
            <div className="flex md:order-2">
                <img src={arabImg} className="mr-10 h-10 hidden md:block sm:h-20" alt="Arab  Logo" />
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse >
                <Navbar.Link className="text-lg" href="#" active>Home</Navbar.Link>
                <Navbar.Link className="text-lg" href="#">Courses</Navbar.Link>
                <Navbar.Link className="text-lg" href="#">FAQS</Navbar.Link>
                <Navbar.Link className="text-lg" href="#">About</Navbar.Link>
                <Navbar.Link className="text-lg" href="#">Discussion</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default MainNavBar