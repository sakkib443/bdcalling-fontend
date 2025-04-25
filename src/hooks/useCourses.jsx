import { useEffect, useState } from "react";

const useCourses = () => {
    const [courses, setCourse] = useState([])

    useEffect(()=>{
        fetch("/Courses.json")
        .then(res=> res.json())
        .then(data => setCourse(data))
    },[])
    return [courses]
};

export default useCourses;