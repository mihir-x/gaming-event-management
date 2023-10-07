import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-5">
            <img src="https://i.ibb.co/9ZQCchF/bbb.png" alt="" className="h-40 w-40 md:h-60 md:w-60" />
            <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold">Oh don&apos;t cry</h1>
            <Link to={-1}><button className="btn btn-success">Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;