import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://frightful-witch-00401.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Service added successfully');
                    reset();
                }
        })
    }
    return (
        <>
             <div>
                <h1 className="text-center text-warning fw-bold fs-1">Add a Service</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="add-service col-lg-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
      <textarea {...register("description")} placeholder="Description"/>
    <input type="number" {...register("price")} placeholder="Price"/>
                <input {...register("img")} placeholder="image url" /> <br />
                            <input type="submit" />
    </form>

                    </div>
                    <div className="col-lg-6">
                        <p>This is Admin Section for add services.</p>
                    </div>
                </div>
            </div>
            </>
    );
};

export default AddService;