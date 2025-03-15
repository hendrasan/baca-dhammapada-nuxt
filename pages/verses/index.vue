<script setup lang="ts">
import type { Verses } from '~/types/verse';

const route = useRoute()

const currentPage = ref(Number(route.query.page) || 1)

const requestParams = computed(() => {
    return {
        page: currentPage.value,
    };
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

    navigateTo({ query: { page: newPage } })

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
</script>

<template>
    <div class="py-8 space-y-8">
        <section class="flex flex-col text-center gap-4">
            <h1 class="text-3xl text-primary">Semua Syair Dhammapada</h1>

            <p class="text-lg">Baca syair-syair Dhammapada beserta cerita tentang setiap syairnya.</p>
        </section>

        <hr />

        <section class="flex flex-col gap-4">
            <!-- <h2 class="text-center text-3xl text-primary">Daftar Bab</h2> -->

            <div v-if="verses == null">
                No data
            </div>

            <div v-else class="flex flex-col gap-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <NuxtLink class="group" v-for="verse in verses" :key="verse.id"
                        :to="{ name: 'verses-id', params: { id: verse.id } }">
                        <VerseCard :verse="verse" />
                    </NuxtLink>
                </div>

                <VPagination :meta="meta" :currentPage="currentPage" :handlePageChange="handlePageChange" />
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