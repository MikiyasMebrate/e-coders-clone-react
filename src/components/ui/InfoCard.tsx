import {  Card } from "flowbite-react";
import {BiSolidPencil} from "react-icons/bi"


type InfoCardProps = {
    className: string,
    title: string,
    body: string
}


const InfoCard = ({ className, title, body }: InfoCardProps) => {
    return (
        <>
            <Card className={className + " max-w-sm h-72"}>
            <BiSolidPencil className="w-14 h-14  rounded-full text-green-900 " />
                <h5 className="text-3xl mt-3 font-mono font-bold text-gray-800 dark:text-white">
                  {title}
                </h5>
                <p className="font-mono text-base mt-3 text-gray-600 dark:text-gray-400">
                  {body}
                </p>
                <p className="font-mono text-sm text-gray-400 dark:text-gray-400">
                 Ethiopian Coders
                </p>
            </Card>
        </>
    );
}

export default InfoCard;