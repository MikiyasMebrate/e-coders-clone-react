
"use client";

import { Button, Card } from "flowbite-react";
import { BiCode } from "react-icons/bi"

type EnrollCardProps = {
    title: string,
    body: string,
    btnColor: string,
    className?: string 
}

const EnrollCard = ({ title, body, btnColor, className }: EnrollCardProps) => {
    return (
        <Card className={className + " max-w-sm"}>
            <BiCode className="w-14 h-14  rounded-full bg-green-900 text-white " />
            <h5 className="text-2xl  tracking-tight text-gray-900 dark:text-white">
                {title}
            </h5>
            <p className="font-extralight md:h-44 text-sm text-gray-400 dark:text-gray-400">
                {body}
            </p>
            <Button className={btnColor}>
                Enroll
                <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </Button>
        </Card>
    );
}


export default EnrollCard