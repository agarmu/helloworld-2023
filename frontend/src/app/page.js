'use client'
import Image from 'next/image'
import Filter from '@/app/filter';
import SearchBar from '@/app/searchBar';
import Courses from '@/app/courses';
import ErrorModal from "@/app/errormodal";
import { useState, useEffect } from 'react'
import {checkCourses, getCourses, getSubjects} from "@/app/api";

import {sortBy, sample} from "lodash";
export default function Home() {
    const [subjectsData, setSubjectsData] = useState([])
    const [courseData, setCourseData] = useState([])
    const [lookup, setLookup] = useState([])
    const [currentCredits, setCurrentCredits] = useState(-1)
    const [currentLevel, setCurrentLevel] = useState(0)
    const [currentSubject, setCurrentSubject] = useState('AAE')
    const [selectionStatus, setSelectionStatus] = useState(false);
    const [oldStatus, setOldStatus] = useState({
        level: 0,
        subject: 'AAE',
        credits: -1
    })
    let onSubjectChange = (event) => {
        let v = event.target.value
        setCurrentSubject(v)
    }
    let onCreditChange = (event) => {
      let v = event.target.value
      setCurrentCredits(v)
    }

    useEffect(() => {
        if(selectionStatus) {

        } else if (!checkCourses(currentSubject, currentCredits, currentLevel)) {
            console.log(`Illegal operation: not allowed`)
            setSelectionStatus(true)
            setCurrentCredits(oldStatus.credits)
            setCurrentSubject(oldStatus.subject)
            setCurrentLevel(oldStatus.level)
        } else {
            let courses = getCourses(currentSubject, currentCredits, currentLevel).then((x) => {
                let q = x;
                for (let i = 0; i < q.length; i++) {
                    q[i].setSubject(lookup[q[i].subjectId])
                }
                setCourseData(q)
                setSelectionStatus(false)
                setOldStatus({
                    level: currentLevel,
                    subject: currentSubject,
                    credits: currentCredits
                })
            })
        }
        }, [currentSubject, currentCredits, currentLevel, lookup, subjectsData, selectionStatus]);

    useEffect(() => {
        getSubjects()
            .then((data) => {
                let sorted = sortBy(data, (x) => x.abbreviation);
                setSubjectsData(sorted)
            })
    }, [])
    useEffect(() => {
        let dictionary = {};
        for(let i = 0; i < subjectsData.length; i++) {
            dictionary[subjectsData[i]['id']] = subjectsData[i]['abbreviation']
        }
        setLookup(dictionary)
    }, [subjectsData]);
  return (
      <main className="min-h-screen justify-between p-24 bg-white">
        <div className='items-center'>
            <ErrorModal open={selectionStatus} setOpen={setSelectionStatus}/>
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
