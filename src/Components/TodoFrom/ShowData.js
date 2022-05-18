import React from 'react';

import useData from '../../Hooks/useData';

const ShowData = ({list}) => {
    const{_id}=list
   
    
    const [ lists,setList] = useData()
    
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/list/${id}`;
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
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
                <div class="card">
                   
                        <div class="card-body">
                            <h5 class="card-title"> Name : {list.name}</h5>
                        <p class="card-text"> Description : {list.description}</p>
                        <button className='btn btn-danger' onClick={() => handleDelete(list._id)}>Delete</button>
                        </div>
                        
                </div>
            </div>
            
            
            
        </div>
    );
};

export default ShowData;