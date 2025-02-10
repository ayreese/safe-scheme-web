'use server'

import { cookies } from 'next/headers'

export async function create(name: string, value: string): Promise<void> {
    const cookieStore = await cookies()
    cookieStore.set(name, value)
}

export async function read(name:string): Promise<void> {
    const cookieStore = await cookies()
    const hasCookie = cookieStore.has(name)
    console.log("The cookie has been set", hasCookie)
}
