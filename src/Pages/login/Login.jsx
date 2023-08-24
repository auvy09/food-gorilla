import { useContext } from 'react';
import img1 from '../../assets/others/authentication2.png';
import { AuthContext } from '../../contexProvider/AuthPRovider';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true })
            })
    }
    return (<>
        <Helmet>
            <title>FoodGorilla | Login</title>

        </Helmet>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:flex-row">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <img className='mt-4 md:-ml-16' src={img1} alt="" />
                </div>
                <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Login</button>
                        </div>
                    </form>
                    <p className='text-center mb-5'><small><Link to='/signin'>Create an Account</Link></small></p>
                </div>
            </div>
        </div></>
    );
};

export default Login;