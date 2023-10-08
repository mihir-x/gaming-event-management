

const OurTeam = () => {
    return (
        <div className="max-w-screen-lg mx-auto mt-8 md:mt-12 lg:mt-16">
            <div className="text-center">
                <h1 className="font-bold text-xl md:text-2xl lg:text-4xl">Our Team</h1>
                <p className="font-semibold text-base md:text-xl">Here are our dedicated team members who make all this happen</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 md:mt-8 lg:mt-10">
                <div className="h-[20rem] relative">
                    <img src="https://i.ibb.co/JCmQvpz/3fe9fe7f0573.jpg" alt="" className="w-full h-full object-center" />
                    <div className="h-[30%] w-full absolute bg-black bg-opacity-80 bottom-0 left-0">
                        <div className="flex flex-col items-center justify-center mt-5">
                            <h1 className="text-center text-lg font-bold">Michel Schindler</h1>
                            <p>CEO, Tech </p>
                        </div>
                    </div>
                </div>
                <div className="h-[20rem] relative">
                    <img src="https://i.ibb.co/72bWtKq/7771683.jpg" alt="" className="w-full h-full object-center" />
                    <div className="h-[30%] w-full absolute bg-black bg-opacity-80 bottom-0 left-0">
                        <div className="flex flex-col items-center justify-center mt-5">
                            <h1 className="text-center text-lg font-bold">Anna Ivanovich</h1>
                            <p>CEO, Management </p>
                        </div>
                    </div>
                </div>
                <div className="h-[20rem] relative">
                    <img src="https://i.ibb.co/VYBqPqW/istockphoto.jpg" alt="" className="w-full h-full object-cover" />
                    <div className="h-[30%] w-full absolute bg-black bg-opacity-80 bottom-0 left-0">
                        <div className="flex flex-col items-center justify-center mt-5">
                            <h1 className="text-center text-lg font-bold">Jason Brody</h1>
                            <p>CEO, Gaming </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;