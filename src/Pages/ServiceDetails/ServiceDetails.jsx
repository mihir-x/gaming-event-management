import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {

    const allServices = useLoaderData()

    const [clickedService, setClickedService] = useState({})
    const params = useParams()

    useEffect(() => {
        setClickedService(allServices.find(service => service.id == params.id))
    }, [allServices, params.id])

    const { title, image, price, description } = clickedService

    return (
        <div className="max-w-screen-lg mx-auto mt-20">
            <div className=" h-screen shadow-xl">
                <figure className="h-[60%]"><img src={image} alt="Shoes" className="h-full w-full"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <Link className="btn btn-success font-semibold text-white" to={-1}>Go Back</Link>
                        <button className="btn btn-primary">Buy Now ${price}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;