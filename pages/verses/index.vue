<script setup lang="ts">
import type { Verses } from '~/types/verse';

const route = useRoute()

const currentPage = ref(Number(route.query.page) || 1)
const searchQuery = ref(route.query.q as string || '')
const debouncedSearchQuery = ref(route.query.q as string || '')

const requestParams = computed(() => {
    const params: { page: number, q?: string } = {
        page: currentPage.value,
    };

    if (debouncedSearchQuery.value) {
        params.q = debouncedSearchQuery.value;
    }

    return params;
});

const { data, error } = await useApiFetch<Verses>(`/api/v1/verses`, {
    query: requestParams
})

if (error.value) {
    console.error(error)

    await navigateTo({ name: 'index' })
}

const verses = computed(() => data?.value?.data)
const meta = data?.value?.meta

const handlePageChange = (newPage: number) => {
    currentPage.value = newPage

    navigateTo({ query: { ...route.query, page: newPage } })

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

const handleSearch = () => {
    currentPage.value = 1;

    debouncedSearchQuery.value = searchQuery.value

    navigateTo({ query: { ...route.query, q: debouncedSearchQuery.value, page: 1 } })
}
</script>

<template>
    <div class="py-8 space-y-8">
        <section class="flex flex-col text-center gap-4">
            <h1 class="text-3xl text-primary">Semua Syair Dhammapada</h1>

            <p class="text-lg">Baca syair-syair Dhammapada beserta cerita tentang setiap syairnya.</p>

            <Button as-child class="mx-auto">
                <NuxtLink :to="{ name: 'verses-random' }">Lihat Syair Acak</NuxtLink>
            </Button>
        </section>

        <hr />

        <section class="flex flex-col gap-4">
            <!-- <form class="flex gap-2" @submit.prevent="handleSearch">
                <input v-model="searchQuery" type="text" placeholder="Cari syair..."
                    class="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-primary" />
                <Button type="submit">Cari</Button>
            </form> -->

            <div v-if="verses == null">
                No data
            </div>

            <div v-else class="flex flex-col gap-4">
                <form @submit.prevent="handleSearch" class="flex justify-end items-center gap-4">
                    <Input class="w-full md:w-[300px]" v-model="searchQuery" placeholder="Cari syair" />
                </form>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <NuxtLink class="group" v-for="verse in verses" :key="verse.id"
                        :to="{ name: 'verses-id', params: { id: verse.id } }">
                        <VerseCard :verse="verse" />
                    </NuxtLink>
                </div>

                <VPagination :meta="meta" :currentPage="currentPage" :handlePageChange="handlePageChange" />
            </div>
        </section>
    </div>
</template>