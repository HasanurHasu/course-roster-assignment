import { useEffect, useState } from "react";
import Course from "../Course/Course";
import SelectedCourse from "../SelectedCourse/SelectedCourse";
import { Flip, ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [creditRemaining, setCreditRemaining] = useState(20);
    const [totalCredit, setTotalCredit] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0)

    const handleSelectedCourse = (selectCourse, remainingCredit, creditTotal, price) => {
        const newCreditRemaining = creditRemaining - remainingCredit;
        const newTotalCredit = totalCredit + creditTotal;

        const isExist = selectedCourse.find(item => item.id == selectCourse.id);
        if (isExist) {
            return toast.error('You have already selected this course.')
        } else {
            if (newCreditRemaining < 0 || newTotalCredit > 20) {
                return toast.error("You can't add credit up to 20 hours")
            } else {
                const newSelectedCourse = [...selectedCourse, selectCourse];
                setSelectedCourse(newSelectedCourse);


                setCreditRemaining(newCreditRemaining);


                setTotalCredit(newTotalCredit);

                const newTotalPrice = totalPrice + price;
                setTotalPrice(newTotalPrice);
            }
        }
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
                    totalCredit={totalCredit}
                    totalPrice={totalPrice}
                ></SelectedCourse>

            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                transition={Flip}
                theme="light"
            />
        </div>
    );
};

export default Courses;