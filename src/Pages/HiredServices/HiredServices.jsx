import { useEffect, useState } from "react";
import Hired from "../../Components/Hired/Hired";


const HiredServices = () => {

    const [hired, setHired] = useState([])
    const [isFound, setIsFound] = useState(false)

    useEffect(() => {
        const storedHiredServices = JSON.parse(localStorage.getItem('hired'))

        if(storedHiredServices){
            setHired(storedHiredServices)
            setIsFound(true)
        }
    },[])

    // const handleSubmit = e =>{
    //     e.preventDefault()
    //     const text = e.target.text.value 
    //     let p = document.createElement('p')
    //     p.innerText = text
    //     document.getElementById('container').appendChild(p)
    // }

    return (
        <div className="mt-28 max-w-screen-lg mx-auto">
            {/* <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="text" id="" />
                    <button type="submit" className="btn btn-success">click me to add text</button>
                </form>
                
            </div>
            <div id="container">

            </div> */}

            {
                isFound ? <div>
                    <h1 className="text-xl md:text-3xl lg:text-4xl text-center font-semibold mb-10">Here are the list of services you have hired us for</h1>
                    {
                        hired.map(hiredService => <Hired key={hiredService.id} hiredService={hiredService}></Hired>)
                    }
                </div> : <div className=" h-[20rem] flex justify-center items-center"><h1 className=" text-xl md:text-3xl lg:text-4xl font-bold">You havn&apos;t hired us yet</h1></div>
            }

        </div>
    );
};

export default HiredServices;