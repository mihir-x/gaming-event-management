import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Hired = ({ hiredService }) => {
    const { id, title, image } = hiredService

    return (
        <div className='mt-8 flex flex-col items-center justify-center md:grid md:grid-cols-6 border rounded-lg overflow-clip'>
            <div>
                <img src={image} alt="" className=' h-full w-full' />
            </div>
            <div className='col-span-4'>
                <h1 className='text-lg md:text-xl lg:text-2xl md:ml-5'>{title}</h1>
            </div>
            <div>
                <Link className='btn btn-accent' to={`/${id}`}>See Details</Link>
            </div>
        </div>
    );
};

export default Hired;

Hired.propTypes = {
    hiredService: PropTypes.object
}