import PropTypes from 'prop-types';
const SelectedCourse = ({ selectedCourse, creditRemaining, totalCredit, totalPrice }) => {
    return (
        <div className="bg-white rounded-lg p-3">
            <h1 className="text-[#2F80ED] text-lg text-center font-bold  py-4 ">Credit Hour Remaining {creditRemaining} hr</h1>
            <hr />
            <h1 className="text-xl font-bold pt-3 ">Course Name</h1>
            {
                selectedCourse.map((item, idx) => <div key={idx}>
                    <h1 className="text-base text-[#1C1B1B99] py-1">{idx + 1}. {item.title}</h1>
                </div>)
            }
            <hr />
            <h1 className="font-medium py-3">Total Credit Hour : {totalCredit}</h1>
            <hr />
            <h1 className="font-medium py-3">Total Price : {totalPrice} USD</h1>
        </div>
    );
};

SelectedCourse.propTypes = {
    selectedCourse: PropTypes.array,
    creditRemaining: PropTypes.number,
    totalCredit: PropTypes.number,
    totalPrice: PropTypes.number
}

export default SelectedCourse;