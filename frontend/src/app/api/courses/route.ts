import { NextResponse } from 'next/server'
import { o } from 'odata';
import CourseModel from '@/model/course'
export async function getCourses(): Promise<[CourseModel]> {
    const res = await fetch(`https://api.purdue.io/odata/Courses?$filter=Subject/Abbreviation%20eq%20%27CS%27&$orderby=Number%20asc`)
    const data = await res.json()
    return data.value.map((x: any) => CourseModel.prototype.parse(x))

}
export async function GET() {
    return await getCourses()
        .then(courses => NextResponse.json({courses}))
}