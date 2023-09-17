import { NextResponse } from 'next/server'
import CourseModel from '@/model/course'
import SubjectModel from '@/model/subject'

/**
 *
 * @param subject The abbreviation for the chosen string.
 */
export async function getCourses(subject: string): Promise<[CourseModel]> {
    const res = await fetch(`https://api.purdue.io/odata/Courses?$filter=Subject/Abbreviation%20eq%20%27${subject}%27&$orderby=Number%20asc`)
    const data = await res.json()
    return data.value.map((x: any) => CourseModel.prototype.parse(x, subject))
}


export async function getSubjects(): Promise<[SubjectModel]> {
    const res = await fetch('https://api.purdue.io/odata/Subjects')
    const data = await res.json()
    return data.value.map((x: any) => SubjectModel.prototype.parse(x))
}
