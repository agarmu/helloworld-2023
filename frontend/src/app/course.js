var sprintf = require('sprintf-js').sprintf

/**
 * @param secti
 */
export default ({dept, number, credits}) => {
    let sNumber = number % 100;
    let mNumber = (number - sNumber) / 100;
    return (
        <div className="bg-slate-100 rounded-xl p-8 border border-slate-300 hover:border-slate-500 hover:bg-slate-50 text-gray 500 font-semibold">
            <p className="text-gray 500">{dept}{' '}{mNumber}<span className="text-gray-300">{sprintf('%02d', sNumber)}</span></p>
            <p>Credits: <span className="text-blue-500">{credits}</span></p>
        </div>
    )
}
