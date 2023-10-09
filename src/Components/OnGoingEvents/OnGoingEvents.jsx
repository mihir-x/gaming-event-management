import Marquee from "react-fast-marquee";


const OnGoingEvents = () => {
    return (
        <div className="flex max-w-screen-lg mx-auto bg-sky-400">
            <h1 className="p-3 font-semibold text-xl bg-red-500">Ongoing Events</h1>
            <Marquee pauseOnHover={true} speed={80}>
                <p className="mr-20 text-xl font-semibold bg-gradient-to-r from-blue-600 to-green-300 text-red-500 p-4">Digital Nexus: Exploring the Future of Tech and Gaming, Dhaka, Bangladesh</p>
                <p className="mr-20 text-xl font-semibold bg-gradient-to-r from-blue-600 to-green-300 text-red-500 p-4">TechCon 2023: Shaping Tomorrow&apos;s Digital Landscape, Khulna, Bangladesh</p>
                <p className="mr-20 text-xl font-semibold bg-gradient-to-r from-blue-600 to-green-300 text-red-500 p-4">Innovation Unleashed: Exploring the Future of Technology, London, UK</p>
                <p className="mr-20 text-xl font-semibold bg-gradient-to-r from-blue-600 to-green-300 text-red-500 p-4">PMGC: Pubg Mobile Global Championship, Istanbul, Turkey</p>
                <p className="mr-20 text-xl font-semibold bg-gradient-to-r from-blue-600 to-green-300 text-red-500 p-4">eSports Evolution: A Tech and Gaming Extravaganza, North Carolina, US</p>
            </Marquee>
        </div>
    );
};

export default OnGoingEvents;