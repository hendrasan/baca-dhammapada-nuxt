<script setup lang="ts">

defineProps<{
    meta: {
        current_page: number
        per_page: number
        total: number
        last_page: number
    }
    currentPage: number
    handlePageChange: (page: number) => void
}>()

</script>

<template>
    <Pagination v-slot="{ page }" :items-per-page="meta?.per_page" :total="meta?.total" show-edges :page="currentPage" class="flex justify-center">
        <PaginationList v-slot="{ items }" class="flex items-center gap-1">
            <PaginationFirst @click="handlePageChange(1)" />
            <PaginationPrev @click="handlePageChange(page - 1)" />

            <template v-for="(item, index) in items">
                <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
                    <Button class="w-10 h-10 p-0" :variant="item.value === page ? 'default' : 'outline'" @click="handlePageChange(item.value)">
                        {{ item.value }}
                    </Button>
                </PaginationListItem>
                <PaginationEllipsis v-else :key="item.type" :index="index" />
            </template>

            <PaginationNext @click="handlePageChange(page + 1)" />
            <PaginationLast @click="handlePageChange(meta?.last_page)" />
        </PaginationList>
    </Pagination>
</template>