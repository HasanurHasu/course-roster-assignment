import PropTypes from 'prop-types';
const Course = ({ course, handleSelectedCourse }) => {
    const { title, img, description, price, hours } = course;
    return (
        <>
            <div className="bg-[#FFF] p-4 rounded-lg">
                <figure className="">
                    <img src={img} alt="Shoes" className="w-full" />
                </figure>
                <div className="">
                    <h2 className="text-lg font-semibold pt-4">{title}</h2>
                    <p className='py-2 text-justify text-sm font-normal text-[#1C1B1B99]'>{description}</p>
                    <div className='flex justify-between'>
                        <div>
                            <p className='text-base text-[#1C1B1B99] font-medium'>$ Price : {price}</p>
                        </div>
                        <div>
                            <p className='text-base text-[#1C1B1B99] font-medium'>$ Credit : {hours}hr</p>
                        </div>
                    </div>
                    <div className="my-3">
                        <button onClick={() => handleSelectedCourse(course, course.hours)} className="btn-primary text-white bg-[#2F80ED] w-full py-2 rounded-xl">Select</button>
                    </div>
                </div>
            </div>
        </>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired
}

export default Course;