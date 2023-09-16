var sprintf = require('sprintf-js').sprintf

export default Course

/**
 *
 * @param {{dept: string, number: number, credits: number}} course Contains metadata regarding the course
 * @returns {JSX.Element} Subject block component
 */
function Course({course}) {
    let {dept, number, credits} = course;
    let sNumber = number % 100;
    let mNumber = (number - sNumber) / 100;
    return (
        <div
            className="bg-slate-100 rounded-xl p-8 border border-slate-300 hover:border-slate-500 hover:bg-slate-50 text-blue-500 font-semibold group">
            <p className="text-gray-600">{dept}{' '}{mNumber}<span
                className="text-gray-300 group-hover:text-gray-400">{sprintf('%02d', sNumber)}</span></p>
            <p>Credits: <span className="text-blue-500">{credits}</span></p>
        </div>
    )
}
