import { useLoaderData } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Service from "../../Components/Service/Service";
import Banner from "../../Components/Banner/Banner";
import OnGoingEvents from "../../Components/OnGoingEvents/OnGoingEvents";
import OurTeam from "../../Components/OurTeam/OurTeam";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
import FrequentQuestions from "../../Components/FrequentQuestions/FrequentQuestions";


const Home = () => {

    const services = useLoaderData()
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div>
            <Banner></Banner>
            <OnGoingEvents></OnGoingEvents>
            <div data-aos='zoom-in' className="max-w-screen-lg mx-auto space-y-2 md:space-y-5 lg:space-y-8 my-5 md:my-8 lg:my-10">
                <div className="space-y-2">
                    <h1 className="text-center font-bold text-xl md:text-2xl lg:text-4xl">Our Services</h1>
                    <p className="font-semibold text-base md:text-xl text-center">Here are the list of services we offer</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>
            <OurTeam></OurTeam>
            <FrequentQuestions></FrequentQuestions>
            <Footer></Footer>
        </div>
    );
};

export default Home;