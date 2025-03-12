<script setup lang="ts">
import type { Verse } from '~/types/chapter';

defineProps({
    verse: {
        type: Object as PropType<Verse>,
        required: true
    }
})
</script>

<template>
    <Card class="text-foreground bg-muted h-full transition-all hover:-translate-y-0.5 hover:shadow-md">
        <CardContent class="h-full p-6 rounded-sm">
            <div class="h-full text-lg flex flex-col gap-8">
                <p class="text-primary font-bold">{{ verse.verse_number }}.</p>
                <p>{{ verse.text }}</p>
                <p class="text-gray-600 mt-auto">Cerita: {{ verse.story_title }}</p>
            </div>
        </CardContent>
    </Card>
</template>
