import React, { useEffect, useState } from 'react';
import HotJobsCard from './HotJobsCard';

const HotJob = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [])

    return (
        <div className='my-12'> {/* Corrected: added className */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'> {/* Corrected: added className */}
                {
                    jobs.map(job => <HotJobsCard key={job._id} job={job}></HotJobsCard>)
                }
            </div>
        </div>
    );
};

export default HotJob;