import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";


const Login = () => {

    const {logIn} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value 
        const password = e.target.password.value 
        logIn(email, password)
        .then(res => {
            navigate('/')
            swal('Congratulations', 'Login Successful', 'success')
        })
        .catch(err => {
            swal('Ooops!', err.message, 'error')
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="mx-auto mb-2">Don&apos;t have an account? <Link to='/register' className="text-blue-200">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;