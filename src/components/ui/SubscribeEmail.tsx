import { Button, TextInput } from "flowbite-react";
import { HiOutlineMail } from "react-icons/hi";


const SubscribeEmail = () => {
    return (
        <>
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

        </>
    );
}

export default SubscribeEmail;