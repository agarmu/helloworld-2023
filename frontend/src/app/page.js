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
    const [isSubjectsLoading, setSubjectsLoading] = useState(true)

    const [courseData, setCourseData] = useState([])

    const [currentSubject, setCurrentSubject] = useState('AAE')
    let onSubjectChange = (event) => {
        let v = event.target.value
        setCurrentSubject(v)
    }
    useEffect(() => {
        getCourses(currentSubject)
            .then((data) => {
                setCourseData(data)
            })
    }, [currentSubject]);
    useEffect(() => {
        getSubjects()
            .then((data) => {
                let sorted = sortBy(data, (x) => x.abbreviation);
                setSubjectsData(sorted)
                setSubjectsLoading(false)
            })
    }, [])

  return (
      <main className="min-h-screen justify-between p-24 bg-white">
        <div className='items-center'>
          <h1 className='text-blue-500 font-bold text-5xl'>Purdue Class Finder</h1>
        <div>
          <Filter subjects={subjectsData} currentSubject={currentSubject} changeSubject={onSubjectChange}/>
        </div>
        </div>
          <SearchBar/>
          <Courses courses={courseData} />
      </main>
  )
}
