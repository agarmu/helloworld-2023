import { NextResponse } from 'next/server'
import { o } from 'odata';
import SubjectModel from '@/model/subject'

export async function getSubject(): Promise<[SubjectModel]> {
    const res = await fetch('https://api.purdue.io/odata/Subjects')
    const data = await res.json()
    return data.value.map((x: any) => SubjectModel.prototype.parse(x))
}
export async function GET() {
    return await getSubject()
        .then(courses => NextResponse.json({courses}))
}