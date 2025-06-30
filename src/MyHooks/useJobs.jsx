
import axios from "axios";
import React, { useEffect, useState } from "react";

const useJobs = (sort, search, minSallary, maxSallary) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true; // Prevent state updates if the component unmounts
    axios.get(`https://career-climb-server.vercel.app/jobs?sort=${sort}&search=${search}&min=${minSallary}&max=${maxSallary}`)
      .then((res) => {
        if (isMounted) {
          setJobs(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false; // Cleanup to prevent memory leaks
    };
  }, [sort,search, minSallary, maxSallary]);

  return { jobs, loading };
};

export default useJobs;
