import React from 'react';
import { Link } from 'react-router-dom';


import useData from '../../Hooks/useData';

const ShowData = ({list}) => {
    const{_id}=list
   
    
    const [ lists,setList] = useData()
    
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://tranquil-mountain-71827.herokuapp.com/list/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = lists.filter(list => list._id !== id);
                    setList(remaining);
                })
        }
    }

    return (
       <div>
            <div className='mt-5'>
                <div class="col">
                    <div class="card shadow p-3 mb-5 bg-body rounded">

                        <div class="card-body">
                            <h5 class="card-title"> Name : {list.name}</h5>
                            <p class="card-text"><i class="fa-solid fa-clipboard-list me-3"></i> {list.task}</p>
                            <button className='btn btn-danger me-3' onClick={() => handleDelete(list._id)}>Delete</button>
                            <Link to={`/editTask/${list._id}`}><button className='btn btn-success' >Edit</button></Link>
                        </div>

                    </div>
                </div>

               
            </div>
       </div>
    );
};

export default ShowData;