import PropTypes from 'prop-types';
const SelectedCourse = ({ selectedCourse, creditRemaining }) => {
    return (
        <div className="bg-white rounded-lg">
            <h1 className="text-[#2F80ED] text-xl text-center font-bold px-3 py-4 ">Credit Hour Remaining {creditRemaining} hr</h1>
            <hr />
            <h1 className="text-xl font-bold p-3 ">Course Name</h1>
            {
              selectedCourse.map((item, idx)=> <div key={idx}>
                <h1 className="text-base text-[#1C1B1B99]">{idx + 1}. {item.title}</h1>
              </div> )
            }
        </div>
    );
};

SelectedCourse.propTypes = {
    selectedCourse: PropTypes.array,
    creditRemaining: PropTypes.number
}

export default SelectedCourse;