'use client';

export default Filter

function Filter({subjects, currentSubject, changeSubject, currentCredits, changeCredits}) {
    return (
     <div className="flex flex-col items-center justify-center text-center m-2">
            <select
                 className="block border rounded border-gray-500 p-2 focus:outline-none text-black 500 m-2"
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
             <select
                 className="block border rounded border-gray-500 p-2 focus:outline-none text-black 500 m-2"
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
    )
}
