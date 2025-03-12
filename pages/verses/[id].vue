<script setup lang="ts">
import type { VerseDetail } from '~/types/verse'

const route = useRoute()

const { id } = route.params

const { data, status, error } = await useApiFetch<VerseDetail>(`/api/v1/verses/${id}`)

const verse = data?.value?.data

if (error.value) {
    console.error(error)

    await navigateTo({ name: 'index' })
}

console.log(verse)
</script>

<template>
    <div class="py-8 space-y-8">
        <p>
            <Button variant="outline" as-child>
                <NuxtLink :to="{ name: 'chapters-id', params: { id: verse?.chapter_id } }"><icon-chevron-left
                        class="w-4 h-4 " /> Lihat syair lain dari Bab {{ verse?.chapter?.number }}: {{
                    verse?.chapter?.title }}</NuxtLink>
            </Button>
        </p>
        <section class="flex flex-col text-center gap-6">
            <!-- <h2 class="text-xl">Bab {{ verse?.chapter?.title }}, Syair {{ verse?.verse_number }}</h2> -->

            <div>
                <h2 class="text-3xl text-primary">Syair {{ verse?.verse_number }}</h2>
                <p class="text-sm text-muted-foreground">Dari Bab {{ verse?.chapter?.number }}: {{ verse?.chapter?.title
                    }}</p>
            </div>
            <div class="max-w-2xl mx-auto italic">
                <h1 class="text-xl font-medium font-serif leading-normal ">{{ verse?.text }}</h1>
            </div>
        </section>

        <hr />

        <section class="flex flex-col gap-4">
            <h2 class="font-bold text-lg text-center text-primary">{{ verse?.story_title }}</h2>

            <div class="whitespace-pre-wrap">
                {{ verse?.story }}
            </div>
        </section>
    </div>
</template>