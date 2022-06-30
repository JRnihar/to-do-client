import React from 'react';
import { useParams } from 'react-router-dom';

const EditTask = () => {
    const{id}=useParams()
    const handleUpdate = async (e) => {
        e.preventDefault()
  
        const name = e.target.name.value;
        const task = e.target.task.value;
      


        const info = {
            name,
            task
        }
      
      

        // const url = `https://tranquil-mountain-71827.herokuapp.com/list/${id}`
        const url = `https://tranquil-mountain-71827.herokuapp.com/list/${id}`
        console.log(url);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(info),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('Update Done')
            })
    }
    return (
        <div>
            <form className='px-12' onSubmit={handleUpdate} >
                
                <input type="text" placeholder=" update Name" name='name' required class="input input-bordered mt-2 w-full max-w-xs" />
                <br />
                <input type="text" placeholder="Update Task" name='task' required class="input input-bordered mt-2 w-full max-w-xs" />
                <br />
                <input type="submit" value='Update' class="input input-bordered w-full mt-2 max-w-xs text-center bg-success text-lg" />
            </form>
        </div>
    );
};

export default EditTask;