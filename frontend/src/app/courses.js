import {sprintf} from "sprintf-js";

export default Courses;

function Courses({courses}) {
    return (
        <div>
            {
                courses.map((c) => {
                    let sNumber = c.courseNumber % 100;
                    let mNumber = (c.courseNumber - sNumber) / 100;
                    return (
                        <div
                            className="bg-slate-100 rounded-xl p-8 border border-slate-300 hover:border-slate-500 hover:bg-slate-50 text-blue-500 font-semibold group"
                            key={"course-" + c.id}
                        >
                            <p>{}{' '}
                                <span className="text-orange-300">{c.subject}</span>&nbsp;<span className="text-gray-500">{mNumber}</span>
                                <span className="text-gray-300 group-hover:text-gray-400">{sprintf('%02d', sNumber)}</span>:&nbsp;
                                <span className="text-blue-900">{c.title}</span>
                            </p>
                            <p>Credits: <span className="text-blue-500">{c.credits}</span></p>
                        </div>
                    )
                })
            }
        </div>
    )
}