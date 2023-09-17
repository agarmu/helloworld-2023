import { NextResponse } from 'next/server'
import CourseModel from '@/model/course'
import SubjectModel from '@/model/subject'

export function checkCourses(subject: string, credits: number, level: number): boolean {
    return !((subject == null || subject == '') && credits < 0 && level < 1)
}
export async function getCourses(subject: string, credits: number, level: number ): Promise<[CourseModel]> {
    let url = 'https://api.purdue.io/odata/Courses?$filter='
    let queries: string[] = []
    if(!checkCourses(subject, credits, level)) {
        throw new Error("no.")
    }
    if (subject != null && subject != '') {
        queries.push(`Subject/Abbreviation eq '${subject}'`)
    }
    if (credits >= 0) {
        queries.push(`CreditHours eq ${credits}`)
    }
    if (level >= 1) {
        queries.push(`Number ge ${level * 100_00}`, `Number le ${(level + 1) * 100_00 - 1}`)
    }
    url = url + queries.join(" and ") + "&$orderby=Number asc"
    console.log(url)
    url = encodeURI(url)
    const res = await fetch(url)
    let data = await res.json()
    return data.value.map((x: any) => CourseModel.prototype.parse(x))
}


export async function getSubjects(): Promise<[SubjectModel]> {
    const res = await fetch('https://api.purdue.io/odata/Subjects')
    const data = await res.json()
    return data.value.map((x: any) => SubjectModel.prototype.parse(x))
}
