import { useEffect, useState } from "react";
import Course from "../Course/Course";
import SelectedCourse from "../SelectedCourse/SelectedCourse";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [creditRemaining, setCreditRemaining] = useState(20)

    const handleSelectedCourse = (selectCourse, time) => {
        const newSelectedCourse =[...selectedCourse, selectCourse];
        setSelectedCourse(newSelectedCourse);

        const newCreditRemaining = (creditRemaining - time);
        setCreditRemaining(newCreditRemaining);
    }

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="grid grid-cols-4 gap-5">
            <div className='grid grid-cols-3 gap-5 col-span-3'>
                {
                    courses.map(course => <Course 
                        key={course.id} 
                        course={course}
                        handleSelectedCourse={handleSelectedCourse}
                        ></Course>)
                }
            </div>

            <div className="col-span-1">
                <SelectedCourse 
                selectedCourse={selectedCourse}
                creditRemaining={creditRemaining}
                ></SelectedCourse>
                
            </div>
        </div>
    );
};

export default Courses;