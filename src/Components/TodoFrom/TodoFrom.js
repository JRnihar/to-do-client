import React from 'react';
import { useForm } from "react-hook-form";

const TodoFrom = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className='w-50 mx-auto'>
            <div>
                <h2>TO-Do</h2>
            </div>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='you name' {...register("name", { required: true })} />
                <input className='mb-3' placeholder='you description  ' {...register("description")} />
                <input className='mb-3' type="submit" value='Add' />
            </form>
        </div>
    );
};

export default TodoFrom;