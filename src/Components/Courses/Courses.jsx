import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    console.log(courses);

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="grid grid-cols-4">
            <div className='grid grid-cols-3 gap-5 col-span-3'>
                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>

            <div className="col-span-1">
                <h1 className="text-xl text-center font-bold">Bookmarks</h1>
            </div>
        </div>
    );
};

export default Courses;