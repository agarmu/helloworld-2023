'use client';

import Select from "react-select/base";

export default Filter

function Filter({subjects, currentSubject, changeSubject}) {
    return (
     <div className="w-full-flex">
         <div>
             <select
                 className="block w-3000 border rounded border-gray-500 px-4 py-2 focus:outline-none text-black 500"
                 value={currentSubject}
                 onChange={changeSubject}
             >
                 {
                     subjects.map((s) => (
                         <option key={"subject-" + s.abbreviation} value={s.abbreviation}>{s.abbreviation}</option>
                     ))
                 }
             </select>
         </div>
     </div>
    )
}
