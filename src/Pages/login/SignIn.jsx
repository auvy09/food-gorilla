import { Link, useNavigate } from 'react-router-dom';
import img1 from '../../assets/others/authentication2.png';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../contexProvider/AuthPRovider';
import Swal from 'sweetalert2';


const SignIn = () => {
    const {
        register,
        handleSubmit, reset,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate();
    const [value, setValue] = useState()
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(res => {
                const LoggedUser = res.user;
                console.log(LoggedUser);
                updateUserProfile(data.name, data.phone)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email, phoneNumber: data.phone }
                        fetch(`http://localhost:5000/users`, {
                            method: "POST",
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top',
                                        icon: 'success',
                                        title: 'Sign Up Successful',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })
                    })
                    .catch(e => console.error(e));

            })
    };

    return (<>
        <Helmet>
            <title>FoodGorilla | SignUp</title>

        </Helmet>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:flex-row">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">SignUp now!</h1>
                    <img className='mt-4 md:-ml-16' src={img1} alt="" />
                </div>
                <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" required />
                            {errors.name && <span className='text-red-400 mt-2'>Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <PhoneInput className="input input-bordered"
                                placeholder="Enter phone number" {...register("phone", { required: true })}
                                value={value}
                                onChange={setValue} required />
                            {errors.phone && <span className='text-red-400 mt-2'>Phone Number required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="Email" className="input input-bordered" />
                            {errors.email && <span className='text-red-400 mt-2'>Email field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true })} name="password" placeholder="Password" className="input input-bordered" />
                            {errors.password && <span className='text-red-400 mt-2'>Password field is required</span>}

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-warning" type="submit" value='Sign Up' />

                        </div>
                    </form>
                    <p className='text-center mb-5'><small>Already Have an Account?<Link to='/login' className='btn ml-2 btn-outline border-0' > Login now</Link></small></p>
                </div>
            </div>
        </div></>
    );
};

export default SignIn;