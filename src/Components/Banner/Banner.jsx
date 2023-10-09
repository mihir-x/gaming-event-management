

const Banner = () => {
    return (
        <div className="h-[30rem] w-full bg-[url('https://i.ibb.co/pWSHpxc/event.jpg')] bg-center bg-cover ">
            {/* <img src="https://i.ibb.co/pWSHpxc/event.jpg" alt="" className="h-full w-full object-center" /> */}
            <div className="h-full flex justify-center items-center">
                <h1 className="text-xl text-black md:text-3xl lg: lg:text-5xl font-bold text-center">Tech And Gaming Event Management <br />Services For You</h1>
            </div>
        </div>
    );
};

export default Banner;