import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'
import Loading from "../Components/Loading/Loading";


const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <Loading></Loading>
    }

    if(!user){
        return <Navigate to='/login'></Navigate>
    }

    return children
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    children: PropTypes.node
}