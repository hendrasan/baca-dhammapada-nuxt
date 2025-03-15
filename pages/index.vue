<script setup lang="ts">
import type { Chapters } from '~/types/chapter';

const { data } = await useApiFetch<Chapters>('/api/v1/chapters')

const chapters = data?.value?.data
</script>

<template>
    <div class="py-8 space-y-8">
        <section class="flex flex-col text-center gap-4">
            <h1 class="text-3xl text-primary">Bab Dhammapada</h1>

            <p class="text-lg">Baca syair-syair Dhammapada beserta cerita tentang setiap syairnya berdasarkan bab.</p>
        </section>

        <hr />

        <section class="flex flex-col gap-4">
            <!-- <h2 class="text-center text-3xl text-primary">Daftar Bab</h2> -->

            <div v-if="chapters == null">
                No data
            </div>

            <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <NuxtLink class="group" v-for="chapter in chapters" :key="chapter.id"
                    :to="{ name: 'chapters-id', params: { id: chapter.id } }">
                    <ChapterCard :chapter="chapter" />
                </NuxtLink>
            </div>
        </section>

        <!-- <hr />

        <section class="flex flex-row justify-center gap-4">
            <Button as-child>
                <NuxtLink :to="{ name: 'index' }">Lihat Semua Syair</NuxtLink>
            </Button>
            <Button as-child>
                <NuxtLink :to="{ name: 'index' }">Lihat Syair Acak</NuxtLink>
            </Button>
        </section> -->
    </div>
</template>