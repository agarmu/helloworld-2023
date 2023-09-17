'use client'
import Image from 'next/image'
import Filter from '@/app/filter';
import SearchBar from '@/app/searchBar';
import Courses from '@/app/courses';
import { useState, useEffect } from 'react'
import { getCourses, getSubjects } from "@/app/api";
import {sortBy} from "lodash";
export default function Home() {
    const [subjectsData, setSubjectsData] = useState([])
    const [courseData, setCourseData] = useState([])
    
    const [currentCredits, setCurrentCredits] = useState(-1)
    const [currentSubject, setCurrentSubject] = useState('AAE')

    let onSubjectChange = (event) => {
        let v = event.target.value
        setCurrentSubject(v)
    }

    let onCreditChange = (event) => {
      let v = event.target.value
      setCurrentCredits(v)
    }

    useEffect(() => {
        getCourses(currentSubject)
            .then((data) => {
                let filteredData;
                if (currentCredits == -1) {
                  filteredData = data;
                } else {
                  filteredData = data.filter(x => x.credits == currentCredits)
                }
                setCourseData(filteredData)
            })
    }, [currentSubject, currentCredits]);
    useEffect(() => {
        getSubjects()
            .then((data) => {
                let sorted = sortBy(data, (x) => x.abbreviation);
                setSubjectsData(sorted)
            })
    }, [])

  return (
      <main className="min-h-screen justify-between p-24 bg-white">
        <div className='items-center'>
          <h1 className='text-blue-500 font-bold text-5xl'>Purdue Class Inventory</h1>


          <div>
            <Filter subjects={subjectsData} currentSubject={currentSubject} changeSubject={onSubjectChange} currentCredits={currentCredits} changeCredits={onCreditChange}/>
          </div>
        </div>
        <div>

        </div>
          <SearchBar/>
          <Courses courses={courseData} />
      </main>
  )
}
