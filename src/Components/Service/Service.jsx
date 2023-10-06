import PropTypes from 'prop-types';


const Service = ({ service }) => {
    
    const {title, image, price, description} = service
    

    return (
        <div className="relative shadow-lg shadow-white grid h-[25rem] w-full max-w-[28rem] flex-col items-center justify-center overflow-hidden rounded-xl text-center ">
            <div style={{backgroundImage: `url(${image})`}} className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center  shadow-none`}>
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
            </div>
            <div className="relative p-6 py-14 px-6 md:px-12">
                <h2 className="mb-6 block font-sans text-lg md:text-xl lg:text-2xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                    {title}
                </h2>
                <h5 className="mb-4 block font-sans text-base md:text-xl leading-snug tracking-normal text-white antialiased">
                    {description.slice(0, 50)}
                </h5>
                <div>
                    <h3 className='text-white font-bold text-lg'>${price}</h3>
                    <button className='btn btn-accent'>See Details</button>
                </div>
            </div>
        </div>
    );
};

export default Service;

Service.propTypes = {
    service: PropTypes.object
}