<script setup lang="ts">
import { Menu } from 'lucide-vue-next';
</script>

<template>
    <header class="bg-background/80 backdrop-blur-sm sticky top-0 z-40 w-full border-b border-border/40 ">
        <div class="container mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
                <NuxtLink href="/" class="text-2xl font-semibold text-primary hover:text-primary/80 transition-colors">
                    Baca Dhammapada
                </NuxtLink>

                <div class="flex items-center">
                    <!-- Search -->

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" class="rounded-full md:hidden">
                                <Menu />
                                <span class="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" class="md:hidden">
                            <div class="grid gap-4 p-4">
                                <SheetClose asChild>
                                    <NuxtLink :to="{ name: 'index' }"
                                        class="text-foreground/80 hover:text-primary transition-colors"
                                        :class="{ 'text-primary': $route.name === 'chapters-id' }"
                                        active-class="text-primary">
                                        Bab
                                    </NuxtLink>
                                </SheetClose>
                                <SheetClose asChild>
                                    <NuxtLink :to="{ name: 'verses' }"
                                        class="text-foreground/80 hover:text-primary transition-colors"
                                        :class="{ 'text-primary': $route.name === 'verses-id' }"
                                        active-class="text-primary">
                                        Syair
                                    </NuxtLink>
                                </SheetClose>
                            </div>
                        </SheetContent>
                    </Sheet>
                    <!-- Nav -->
                    <nav class="hidden md:block">
                        <ul class="flex items-center gap-6">
                            <!-- <li>
                                <NuxtLink href="/about" class="text-foreground/80 hover:text-primary transition-colors">
                                About
                                </NuxtLink>
                            </li> -->
                            <li>
                                <NuxtLink :to="{ name: 'index' }"
                                    class="text-foreground/80 hover:text-primary transition-colors"
                                    :class="{ 'text-primary': $route.name === 'chapters-id' }"
                                    active-class="text-primary">
                                    Bab
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink :to="{ name: 'verses' }"
                                    class="text-foreground/80 hover:text-primary transition-colors"
                                    :class="{ 'text-primary': $route.name === 'verses-id' }"
                                    active-class="text-primary">
                                    Syair
                                </NuxtLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>