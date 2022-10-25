import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Login = () => {
    const {signIn, googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignIn = (event) =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log('Signed in User', user);
            form.reset();
            navigate('/')
            
        })
        .catch(error =>{
            console.error(error.message);
        })
    }

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate('/');
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Please Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body mb-0">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <Link to='/register' className="label-text-alt link link-hover">New User? Please Register</Link>
                        </label>
                        </div>
                        <div className="form-control mt-2 mb-0">
                        <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="divider mt-0">OR</div>
                    <div className="grid h-20 card bg-base-100 rounded-box place-items-center">
                    <button onClick={handleGoogleSignIn} className="btn">Google</button>
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default Login;