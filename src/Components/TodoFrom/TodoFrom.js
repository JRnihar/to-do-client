import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const TodoFrom = () => {
    const navigate=useNavigate()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        // const url = `https://tranquil-mountain-71827.herokuapp.com/list`;
        const url = `https://tranquil-mountain-71827.herokuapp.com/list`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                navigate('/todoData')
            })
    }
    return (
        <div className='w-50 mx-auto align-items-center mt-5'>
            <div>
                <h2>TO-Do-From</h2>
            </div>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='you name' {...register("name", { required: true })} />
                <input className='mb-3' placeholder='Add your Task' {...register("task")} />
                <input className='mb-3' type="submit" value='Add' />
            </form>
        </div>
    );
};

export default TodoFrom;