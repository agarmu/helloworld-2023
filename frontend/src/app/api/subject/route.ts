import { NextResponse } from 'next/server'
import { o } from 'odata';
import Subject from '@/model/subject'

export async function getCourses(): Promise<[Subject]> {
    const res = await fetch('https://api.purdue.io/odata/Subjects')
    const data = await res.json()
    return data.value.map((x: any) => Subject.prototype.parse(x))
}
export async function GET() {
    return await getCourses()
        .then(courses => NextResponse.json({courses}))
}