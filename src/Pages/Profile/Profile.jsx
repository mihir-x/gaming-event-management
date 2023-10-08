import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaMailBulk } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import swal from "sweetalert";


const Profile = () => {

    const { user, logOut } = useContext(AuthContext)
    console.log(user)

    const handleLogout = () => {
        logOut()
            .then(() => {
                swal('See ya', 'User logged out successfully', 'success')
            })
            .catch(err => {
                swal('Ooops!', err.message, 'error')
            })
    }

    return (
        <div className="h-screen flex justify-center items-center mt-20">
            <div className="p-2 md:p-5 lg:p-8 rounded-md shadow-lg space-y-6">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">{user.displayName}</h1>
                <figure className="w-20 md:w-40 h-20 md:h-40 mx-auto">
                    <img src={user.photoURL} alt="" className="w-full h-full rounded-full" />
                </figure>
                <div className="space-y-5">
                    <h2 className=" text-lg md:text-xl font-semibold pb-3 border-b-2">Contact Info</h2>
                    <p className="flex items-center text-lg"><FaMailBulk></FaMailBulk> <span className="ml-5">{user.email}</span></p>
                    <p className="flex items-center text-lg"><FaPhoneAlt></FaPhoneAlt> <span className="ml-5">{user.phoneNumber ? user.phoneNumber : 'N/A'}</span></p>
                </div>
                <div className="text-center">
                    <button onClick={handleLogout} className="btn btn-success text-white">Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;