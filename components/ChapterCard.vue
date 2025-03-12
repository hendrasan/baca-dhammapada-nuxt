<script setup lang="ts">
import type { Chapter } from '~/types/chapter';

defineProps({
    chapter: {
        type: Object as PropType<Chapter>,
        required: true
    }
})
</script>

<template>
    <Card class="h-full transition-all hover:-translate-y-0.5 hover:shadow-md">
        <CardHeader>
            <CardTitle class="text-primary">
                Bab {{ chapter.number }}: {{ chapter.title }}
            </CardTitle>
        </CardHeader>
        <CardContent>
            <p class="">{{ chapter.verses_count }} syair</p>
        </CardContent>
    </Card>
</template>
