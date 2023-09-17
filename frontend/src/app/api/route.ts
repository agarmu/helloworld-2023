import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const subjects = searchParams.get('subject').split('+')
    const credits = searchParams.get('credit').split('+').map(parseInt)

    console.log(subjects)
    console.log(credits)
    return NextResponse.json({ })
}
