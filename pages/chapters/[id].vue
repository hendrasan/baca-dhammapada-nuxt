<script setup lang="ts">
import type { ChapterWithVerses } from '~/types/chapter'

const route = useRoute()

const { id } = route.params

const { data: chapter, status, error } = await useApiFetch<ChapterWithVerses>(`/api/v1/chapters/${id}`)

const chapterData = chapter?.value?.data

if (error.value) {
    console.error(error)

    await navigateTo({ name: 'index' })
}

console.log(chapterData)
</script>

<template>
    <div class="py-8 space-y-8">
        <section class="flex flex-col text-center gap-4">
            <h1 class="text-3xl text-primary">{{ chapterData?.title }}</h1>

            <p class="text-lg">Baca {{ chapterData?.verses_count }} syair dari bab {{ chapterData?.title }}.</p>

            <p>
                <Button as-child>
                    <NuxtLink :to="{ name: 'index' }">Lihat semua bab</NuxtLink>
                </Button>
            </p>
        </section>

        <hr />

        <section class="flex flex-col gap-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <NuxtLink class="group" v-for="verse in chapterData?.verses" :key="verse.id">
                    <VerseCard :verse="verse" />
                </NuxtLink>
            </div>
        </section>
    </div>
</template>