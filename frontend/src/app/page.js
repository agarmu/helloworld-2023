'use client'
import Image from 'next/image'
import Filter from '@/app/filter';
import SearchBar from '@/app/searchBar';
import Course from '@/app/course';
import { useState, useEffect } from 'react'
import { getCourses} from "@/app/api/courses/route";
import { sprintf } from 'sprintf-js'
import {getSubject} from "@/app/api/subject/route";
import {sortBy} from "lodash";

export default function Home() {
    const [subjectsData, setSubjectsData] = useState([])
    const [isSubjectsLoading, setSubjectsLoading] = useState(true)

    useEffect(() => {
        getSubject()
            .then((data) => {
                let sorted = sortBy(data, (x) => x.abbreviation);
                setSubjectsData(sorted)
                setSubjectsLoading(false)
            })
    }, [])

    const [courseData, setCourseData] = useState([])
    const [isCoursesLoading, setCoursesLoading] = useState(true)

    useEffect(() => {
            getCourses()
            .then((data) => {
                setCourseData(data)
                setSubjectsLoading(false)
            })
    }, [])
  return (
      <main className="min-h-screen justify-between p-24 bg-white">
        <div className='items-center'>
          <h1 className='text-blue-500 font-bold text-5xl'>Purdue Class Finder</h1>
        <div>
          <Filter subjects={subjectsData}/>
        </div>
        </div>
          <SearchBar/>
          {
          courseData.map((c) => (
            <Course key="{c}" number={c.courseNumber} credits={c.credits}/>
          ))
        }
      </main>
  )
}
