import { NextResponse } from 'next/server'
import fs from 'fs'
let data: any = null;

export default async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const subjects: string[] = searchParams.get('subject').split('+')
    const credits: number[] = searchParams.get('credit').split('+').map(parseInt)

    console.log(subjects)
    console.log(credits)
    return NextResponse.json({ })
}