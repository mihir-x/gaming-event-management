import { useLoaderData } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Service from "../../Components/Service/Service";
import Banner from "../../Components/Banner/Banner";
import OnGoingEvents from "../../Components/OnGoingEvents/OnGoingEvents";
import OurTeam from "../../Components/OurTeam/OurTeam";


const Home = () => {

    const services = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <OnGoingEvents></OnGoingEvents>
            <div className="max-w-screen-lg mx-auto space-y-2 md:space-y-5 lg:space-y-8 my-5 md:my-8 lg:my-10">
                <h1 className="text-center font-bold text-xl md:text-2xl lg:text-4xl">Our Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>
            <OurTeam></OurTeam>
            <Footer></Footer>
        </div>
    );
};

export default Home;