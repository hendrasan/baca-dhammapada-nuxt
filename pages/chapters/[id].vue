<script setup lang="ts">
import type { ChapterWithVerses } from '~/types/chapter'

const route = useRoute()

const { id } = route.params

const { data, status, error } = await useApiFetch<ChapterWithVerses>(`/api/v1/chapters/${id}`)

const chapter = data?.value?.data

if (error.value) {
    console.error(error)

    await navigateTo({ name: 'index' })
}
</script>

<template>
    <div class="py-8 space-y-8">
        <p>
            <Button variant="outline" as-child>
                <NuxtLink :to="{ name: 'index' }">
                    <icon-chevron-left class="w-4 h-4 " /> Kembali ke daftar bab</NuxtLink>
            </Button>
        </p>
        <section class="flex flex-col text-center gap-4">
            <h1 class="text-3xl text-primary">Bab {{ chapter?.number }}: {{ chapter?.title }}</h1>

            <!-- <p class="text-lg">Baca {{ chapter?.verses_count }} syair dari bab {{ chapter?.title }}.</p> -->

            <!-- <p>
                <Button as-child>
                    <NuxtLink :to="{ name: 'index' }">Lihat semua bab</NuxtLink>
                </Button>
            </p> -->
        </section>

        <hr />

        <section class="flex flex-col gap-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <NuxtLink class="group" v-for="verse in chapter?.verses" :key="verse.id"
                    :to="{ name: 'verses-id', params: { id: verse.id } }">
                    <VerseCard :verse="verse" />
                </NuxtLink>
            </div>
        </section>
    </div>
</template>