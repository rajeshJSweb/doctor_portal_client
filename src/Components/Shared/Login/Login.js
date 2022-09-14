import React from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Loading from './../Loading/Loading';

const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    let signInError;
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if(loading || googleLoading){
        return <Loading/>
    }

    if(error || googleError){
        signInError=<p>{error?.message || googleError?.message}</p>
    }

    if(user || googleUser){
        navigate(from, { replace: true });
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    };

    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-violet-200 shadow-xl">
            <div class="card-body">
                <h2 class="text-center text-3xl font-bold text-white">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text text-xl">Email</span>
                        </label>
                        <input 
                        type="email" 
                        placeholder="Enter your email" 
                        class="input input-bordered w-full max-w-xs" 
                        {...register("email", {
                            required:{
                                value:true,
                                message:'Email is required'
                            },
                            pattern: {
                              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                              message: 'Provide a valid email address'
                            }
                          })} 
                        />
                        {errors.email?.type === 'required' && <span className='text-start text-red-800'>{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className='text-start text-red-800'>{errors.email.message}</span>}
                        <label class="label">
                            <span class="label-text text-xl">Password</span>
                        </label>
                        <input 
                        type="password" 
                        placeholder="Enter your password" 
                        class="input input-bordered w-full max-w-xs" 
                        {...register("password", {
                            required:{
                                value:true,
                                message:'Enter your password'
                            },
                            minLength: {
                              value: 6,
                              message: 'Most be 6 Charecters'
                            }
                          })}
                        />
                        {errors.password?.type === 'required' && <span className='text-start text-red-800'>{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className='text-start text-red-800'>{errors.password.message}</span>}
                        <label class="label">
                            <span class="label-text-alt">Forgot password?</span>
                        </label>
                    </div>
                    {signInError}
                    <input 
                     className='btn w-full max-w-xs' 
                     type="submit" 
                     value="login" />
                </form>
                <p>New to Doctors Portal <Link to="/signUp">| <span className='text-secondary'>create an account</span></Link></p>
                <div className='divider'>OR</div>
                <button 
                onClick={()=> signInWithGoogle()} 
                class="btn btn-ghost">Login With Google</button>
                </div>
            </div>
            </div>
    );
};

export default Login;