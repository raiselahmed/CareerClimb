import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../Context/AuthContext';

const MyApplication = () => {
    const {user} = useContext(AuthContext);
    const [job, setJob] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/job-application?email=${user.email}`)
        .then(res => res.json())
        .then(data=>{
            setJob(data)
        })
    },[user.email])

    return (
        <div>
            <h1>job {job.length}</h1>
        </div>
    );
};

export default MyApplication;