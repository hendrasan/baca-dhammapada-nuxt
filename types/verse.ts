import type { Chapter } from "./chapter"

export type Verse = {
    id: number
    chapter_id: number
    verse_number: number
    text: string
    english_text: string
    story_title: string
    english_story_title: string
    story: string
    english_story: string
    chapter?: Chapter
}

export type Verses = {
  data: Verse[];
  meta: any;
};

export type VerseDetail = {
  data: Verse;
};