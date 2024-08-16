import { Button, Card } from "flowbite-react";
import {BiCode} from "react-icons/bi"

type AboutProps = {
    className : string,
    title : string,
    body : string
}


const AboutCard = ({className, title, body} : AboutProps) => {
    return (
        <>
            <Card href="#" className={className + " max-w-sm h-72"}>
                <BiCode className="w-14 h-14  rounded-full bg-green-900 text-white " />
                <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                   {title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                   {body}
                </p>
                <Button gradientMonochrome="info">Enroll Now</Button>
            </Card>
        </>
    );
}

export default AboutCard;