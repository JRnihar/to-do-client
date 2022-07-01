import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Home = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className=' text-center justify-content-center mt-5' >
            <h1>Welcome To my TO-Do-App</h1>
            {/* <img className='mt-5 rounded-5' src="https://media.istockphoto.com/photos/to-do-list-in-notebook-with-calendar-picture-id1092571024?k=20&m=1092571024&s=612x612&w=0&h=dz6l5jjYZC0lU2dUkqu5g5_0XtY3xnHs57mJDNlvJSk=" alt="" /> */}
           <div className='d-flex justify-content-center mt-5 mb-5'>
                <Calendar onChange={onChange} value={value} />
           </div>
        </div>
    );
};

export default Home;