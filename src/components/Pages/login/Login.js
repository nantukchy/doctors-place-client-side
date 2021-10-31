import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hook/useFirebase';

const Login = () => {
    const { signInUsingGoogle } = useFirebase();
    return (
        <div className=" container">
        <div className="row align-items-center" style={{ height: "100vh" }}>
            <div className="col-md-6 shadow p-5">
                    <div className="form-group">
                        <h2 className="text-center text-warning fw-bold fs-1">goGo Tours Service</h2>
                        <h4>For access and avail our Exclusive offers <br/> Please Login with Google user ID</h4>
                    <label htmlFor="">User Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="text-danger">Forgot your password?</label>
                </div>
                <div className="from-group mt-5">
                    <Button onClick={signInUsingGoogle}  className="btn btn-primary" >Google Sign in</Button>
                    </div>
                    <Link to ="/home">Go Back To Home</Link>
            </div>
            <div className="col-md-6 d-none d-md-block">
                <img className="img-fluid" src="https://i.ibb.co/cY654bS/travel-assistance-and-customer-service-vector.jpg"alt="" />
            </div>
        </div>
    </div>
    );
};

export default Login;