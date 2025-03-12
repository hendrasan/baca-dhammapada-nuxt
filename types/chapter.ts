import type { Verse } from "./verse"

export type Chapters = {
    data: Chapter[]
}

export type Chapter = {
    id: number
    number: number
    title: string
    english_title: string
    verses_count: number
}

export type ChapterWithVerses = {
    data: Chapter & { verses: Verse[] }
}