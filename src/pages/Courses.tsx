import coders from "../assets/images/coders.png";
import EnrollCard from "../components/ui/EnrollCard";
import MainFooter from "../components/ui/MainFooter";
import SubscribeEmail from "../components/ui/SubscribeEmail";

const Courses = () => {
    return (
        <>
            <section className="mt-40">
                <div className="container  mx-auto">
                    <div className="w-11/12 shadow rounded-xl bg-green-900 border mx-auto">
                        <div className="flex flex-col md:flex-row p-10 gap-6">
                            <div className="md:w-1/2 mt-5">
                                <p className="text-white uppercase font-mono text-3xl font-bold ">
                                    Welcome to the{" "}
                                    <span className="bg-yellow-400 rounded-lg md:p-3 text-5xl">
                                        Courses
                                    </span>

                                </p>
                                <p className="mt-10 md:mt-20 md:w-1/2 text-gray-300">
                                    The program offers 3 courses: Programming Fundamentals, Data
                                    Science Fundamentals and Android Kotlin Developer
                                </p>
                            </div>
                            <div className="md:w-1/2 flex justify-center ">
                                <img
                                    className="md:w-2/3 shadow-lg rounded-md"
                                    src={coders}
                                    alt="coders"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/**Enroll Courses */}
            <section className="w-full bg-gray-50 p-20 rounded-xl mx-auto md:mt-44">
                <div className="w-11/12 pb-10 mx-auto">
                    <span className="p-1 bg-yellow-400"></span>
                    <p className="uppercase inline ps-2 font-mono text-lg font-bold">
                        About this Initiative
                    </p>
                </div>

                <div className="w-11/12 mx-auto">
                    <div className="flex flex-col md:flex-row gap-6 justify-center ">
                        <div className="md:w-1/3 flex justify-center">

                            <EnrollCard
                                title="Android Developer Fundamentals"
                                body=" This track aims to teach you the core
                                fundamentals of Android development, how
                                app layouts are created, how interactions with 
                                the users take place, and the basics of Kotlin, a
                                language designed especially with speed in
                                mind. It compiles faster, makes your application more lightweight, and prevent them from increasing size"
                                btnColor="bg-green-600"
                            />
                        </div>
                        <div className="md:w-1/3 flex justify-center">
                            <EnrollCard
                                title="Data Science Fundamentals"
                                body="This track aims to teach you the core
                             fundamentals of Data Analytics and refine your ability to work with messy , complex data sets. you'll learn
                            to manipulate and prepare data for analysis and create visualization for data exploration, finally, you'll learn to
                            use your data skills to tell a story with data."
                                btnColor="bg-yellow-400"
                            />
                        </div>
                        <div className="md:w-1/3 flex justify-center">
                            <EnrollCard
                                title="Programming Fundamentals"
                                body="This track aims to teach you the core
                             fundamentals of web development, how web pages are structured called hypertext Markup Language (HTML), how this
                             html structure is then designed and styled using another language called Cascading style sheet (CSS) and finally, 
                             how this style structure gets converted into an interactive application using JavaScript(JS)."
                                btnColor="bg-red-600"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/** Subscribe News */}
            <section className="container mx-auto mt-20 ">
                <SubscribeEmail />
            </section>


            {/** Footer */}
            <section className="mt-20">
                <MainFooter />
            </section>
        </>
    );
};

export default Courses;
