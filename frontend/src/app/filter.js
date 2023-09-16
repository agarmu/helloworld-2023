'use client';
import {useEffect, useState} from "react";
import {getSubject} from "@/app/api/subject/route";
import {sprintf} from "sprintf-js";
import {sortBy} from 'lodash';
export default Filter

function Filter() {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        getSubject()
            .then((data) => {
                let sorted = sortBy(data, (x) => x.abbreviation);
                setData(sorted)
                setLoading(false)
            })
    }, [])
    return (
     <div className="w-full-flex">
      <div>
          <select className="block w-30 border rounded border-gray-500 px-4 py-2 focus:outline-none text-black 500">
          <option selected>Credit Hours</option>
            <option value = "1">One</option>
            <option value = "2">Two</option>
            <option value = "3">Three</option>
            <option value = "4">Four</option>
            <option value = "5">Five</option>
            <option value = "6">Six</option>
            <option value = "7">Seven</option>
            <option value = "8">Eight</option>
            <option value = "9">Nine</option>
          </select>
      </div>
         <div>
             <select
                 className="block w-3000 border rounded border-gray-500 px-4 py-2 focus:outline-none text-black 500">
                 <option selected>Subject</option>
                 {
                     data.map((s) => (
                         <option key={sprintf("subject-%s", s.abbreviation)} value={s.abbreviation}>{s.abbreviation}</option>
                     ))
                 }
             </select>
         </div>
     </div>
    )
}
