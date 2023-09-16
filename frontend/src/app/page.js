'use client'
import Image from 'next/image'
import Filter from '@/app/filter';
import SearchBar from '@/app/searchBar';
import Course from '@/app/course';
import { useState, useEffect } from 'react'
import { getCourses} from "@/app/api/courses/route";
import { sprintf } from 'sprintf-js'

export default function Home() {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)

useEffect(() => {
        getCourses()
        .then((data) => {
            setData(data)
            setLoading(false)
        })
}, [])
  return (
      <main className="min-h-screen justify-between p-24 bg-white">
        <div className='items-center'>
          <h1 className='text-blue-500 font-bold text-5xl'>Purdue Class Finder</h1>
        <div>
          <Filter/>
        </div>
        </div>
          <SearchBar/>
          {
          data.map((c) => (
            <Course key="{c}" number={c.courseNumber} credits={c.credits}/>
          ))
        }
      </main>
  )
}
