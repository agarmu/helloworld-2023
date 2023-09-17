import {sprintf} from "sprintf-js";
export default Courses;
function Courses({courses}) {
    return (
        <div className="sm:m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {
                courses.map((c) => {
                    let sNumber = c.courseNumber % 100;
                    let mNumber = (c.courseNumber - sNumber) / 100;
                    return (
                        <div
                            className="bg-slate-100 rounded-xl p-8 border border-slate-300 hover:border-slate-500 hover:bg-slate-50 text-blue-500 font-semibold group m-5 flex flex-col items-center justify-center text-center"
                            key={"course-" + c.id}
                        >
                            <p>{}{' '}
                                <span className="text-orange-300">{c.subject}</span>&nbsp;<span className="text-gray-500">{mNumber}</span>
                                <span className="text-gray-300 group-hover:text-gray-500">{sprintf('%02d', sNumber)}</span>
                            </p>
                            <p className="text-gray-700">{c.title}</p>
                            <p className="text-gray-700 group-hover:text-blue-300">{c.credits} Credits</p>
                        </div>
                    )
                })
            }
        </div>
    )
}