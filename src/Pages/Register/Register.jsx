import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";
import swal from 'sweetalert';
import { FcGoogle } from 'react-icons/fc';


const Register = () => {

    const { createUser, signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value

        if (!/^(?=.*?[A-Z])(?=.*?[!@#$%^&*?-]).{6,}$/.test(password)) {
            swal('Password Error', 'Password must be at least 6 character and contain capital letter and special character', 'error')
            return
        }

        createUser(email, password)
            .then(res => {
                updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
                    .then(res => {
                        console.log('profile updated', res)
                        window.location.reload(true)
                    })
                    .catch(err => console.log(err.message))
                navigate('/')
                swal('Congratulations', 'User Created Successfully', 'success')
                console.log(res.user)
            })
            .catch(err => {
                swal('Ooop!', err.message, 'error')
            })
    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(res => {
                navigate('/')
                swal(`Congratulations ${res.user.displayName}`, 'Login Successful', 'success')
            })
            .catch(err => {
                swal('Ooops!', err.message, 'error')
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200 pt-20">
            <div className="hero-content flex-col">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-center text-xl font-semibold mt-4">Register Now</h1>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                        </div>
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
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="mx-auto mb-2">Have account? <Link to='/login' className="text-blue-200">Login</Link></p>
                </div>
                <button onClick={handleGoogleLogin} className="px-4 py-2 rounded-md outline bg-transparent flex items-center gap-2"><FcGoogle></FcGoogle> Continue with Google</button>
            </div>
        </div>
    );
};

export default Register;