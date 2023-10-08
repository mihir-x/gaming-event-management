import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const ServiceDetails = () => {

    const allServices = useLoaderData()

    const [clickedService, setClickedService] = useState({})
    const params = useParams()

    useEffect(() => {
        setClickedService(allServices.find(service => service.id == params.id))
    }, [allServices, params.id])

    const { title, image, price, description } = clickedService

    const handleHired = () =>{
        const hiredArray = []
        const storedHired = JSON.parse(localStorage.getItem('hired'))

        if(!storedHired){
            hiredArray.push(clickedService)
            localStorage.setItem('hired',JSON.stringify(hiredArray))
            swal('Thank you!', 'You have hired us for this service', 'success')
        }
        else{
            const isExist = storedHired.find(h => h.id == params.id)

            if(!isExist){
                hiredArray.push(...storedHired, clickedService)
                localStorage.setItem('hired', JSON.stringify(hiredArray))
                swal('Thank you!', 'You have hired us for this service', 'success')
            }
            else{
                swal('Hi there!', 'You have already hired us for this service', 'error')
            }
        }
    }

    return (
        <div className="max-w-screen-lg mx-auto mt-20">
            <div className=" h-screen shadow-xl">
                <figure className="h-[60%]"><img src={image} alt="Shoes" className="h-full w-full"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <Link className="btn btn-success font-semibold text-white" to={-1}>Go Back</Link>
                        <button onClick={handleHired} className="btn btn-primary">Hire Us ${price}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;