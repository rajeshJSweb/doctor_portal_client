import React from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    let signInError;

    if(loading){
        return <button class="btn btn-square loading"></button>
    }
    if(error || googleError){
        signInError=<p>{error?.message || googleError?.message}</p>
    }
    if(googleUser){
        console.log(googleUser)
    }

    const onSubmit =async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.fullName });
          navigate('/apointment')
    };


    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-violet-200 shadow-xl">
            <div class="card-body">
                <h2 class="text-center text-3xl font-bold text-white">Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text text-xl">Full Name</span>
                        </label>
                        <input 
                        type="fullName" 
                        placeholder="Full Name" 
                        class="input input-bordered w-full max-w-xs" 
                        {...register("fullName", {
                            required:{
                                value:true,
                                message:'Name is required'
                            }
                          })} 
                        />
                        {errors.fullName?.type === 'required' && <span className='text-start text-red-800'>{errors.fullName.message}</span>}
                        
                        
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
                            
                        </label>
                    </div>

                    {signInError}
                    <input 
                     className='btn w-full max-w-xs' 
                     type="submit" 
                     value="sign up" />
                </form>
                <p>Already have an account? <Link to="/login">| <span className='text-sky-700'>Login</span></Link></p>
                <div className='divider'>OR</div>
                <button 
                onClick={()=> signInWithGoogle()} 
                class="btn btn-ghost">Login With Google</button>
                </div>
            </div>
            </div>
    );
};

export default SignUp;