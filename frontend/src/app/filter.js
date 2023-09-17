'use client';

export default Filter

function Filter({subjects, currentSubject, changeSubject, currentCredits, changeCredits}) {
    return (
     <div className="w-full-flex">
        <div>
            <select
                 className="block w-3000 border rounded border-gray-500 px-4 py-2 focus:outline-none text-black 500"
                 value={currentCredits}
                 onChange={changeCredits}
             >
                <option key="creditcount-all" value={-1}>Any Credits</option>
                 {
                     [0,1,2,3,4,5,6,7,8,9].map((n) => (
                         <option key={"creditcount-" + n} value={n}>{n} Credits</option>
                     ))
                 }
             </select>

        </div>
         <div>
             <select
                 className="block w-3000 border rounded border-gray-500 px-4 py-2 focus:outline-none text-black 500"
                 value={currentSubject}
                 onChange={changeSubject}
             >
                 <option key="subject-all" value={''}>All Subjects</option>
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
