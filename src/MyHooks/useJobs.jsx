
import axios from "axios";
import React, { useEffect, useState } from "react";

const useJobs = (sort, search) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true; // Prevent state updates if the component unmounts
    axios.get(`http://localhost:5000/jobs?sort=${sort}&search=${search}`)
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
  }, [sort,search]);

  return { jobs, loading };
};

export default useJobs;
