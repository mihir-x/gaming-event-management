import Marquee from "react-fast-marquee";


const OnGoingEvents = () => {
    return (
        <div className="flex max-w-screen-lg mx-auto bg-sky-400">
            <h1 className="p-3 font-semibold text-xl bg-red-500">Ongoing Events</h1>
            <Marquee pauseOnHover={true} speed={80}>
                <p className="mr-20 text-xl font-semibold bg-gradient-to-r from-blue-600 to-green-300 text-red-500 p-4">Digital Nexus: Exploring the Future of Tech and Gaming</p>
                <p className="mr-20 text-xl font-semibold bg-gradient-to-r from-blue-600 to-green-300 text-red-500 p-4">GameFest 2023: Where Technology and Gaming Converge</p>
                <p className="mr-20 text-xl font-semibold bg-gradient-to-r from-blue-600 to-green-300 text-red-500 p-4">TechXperience: A Journey Through the Gaming Universe</p>
                <p className="mr-20 text-xl font-semibold bg-gradient-to-r from-blue-600 to-green-300 text-red-500 p-4">Innovate & Play: The Ultimate Tech and Gaming Summit</p>
                <p className="mr-20 text-xl font-semibold bg-gradient-to-r from-blue-600 to-green-300 text-red-500 p-4">eSports Evolution: A Tech and Gaming Extravaganza</p>
            </Marquee>
        </div>
    );
};

export default OnGoingEvents;