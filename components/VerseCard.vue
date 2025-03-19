<script setup lang="ts">
import type { Verse } from '~/types/verse';

defineProps<{
    verse: Verse,
    withChapterLabel?: boolean
}>()
</script>

<template>
    <Card class="text-foreground bg-muted h-full transition-all hover:-translate-y-0.5 hover:shadow-md">
        <CardContent class="h-full p-6 rounded-sm">
            <div class="h-full text-lg flex flex-col gap-8">
                <div>
                    <p class="text-primary font-bold">Syair {{ verse.verse_number }}</p>
                    <p v-if="withChapterLabel" class="text-muted-foreground text-sm">Bab {{ verse.chapter?.number }}: {{ verse.chapter?.title }}</p>
                </div>
                <p>{{ verse.text }}</p>
                <p class="text-gray-600 mt-auto">Cerita: {{ verse.story_title }}</p>
            </div>
        </CardContent>
    </Card>
</template>
