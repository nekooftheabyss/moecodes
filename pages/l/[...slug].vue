<template>
    <article class="max-w-7xl mx-auto lg:flex">
        <nav class="hidden lg:flex flex-col items-start space-y-8">
            <ContentNavigation v-slot="{ navigation }">
                <div v-for="link of navigation.reduce((acc: any[], v: any) => acc.concat(v.children), []).filter(x => x && x?._path.includes(parent))" :key="link._path">
                    <h2 class="font-semibold text-xl">{{ link.title }}</h2>
                    <ul class="py-2 flex  flex-col items-start space-y-8" v-if="link.children?.length">
                                <li
                                    v-for="grandchild in link.children"
                                    :key="grandchild._path"
                                    class="text-chaos-foreground"
                                >
                                    <NuxtLink :to="grandchild._path">{{
                                        grandchild.title
                                    }}</NuxtLink>
                        </li>
                    </ul>
                </div>
            </ContentNavigation>
        </nav>
        <ContentDoc>
            <template #default="{ doc }">
                <div
                    class="flex flex-col text-justify lg:flex-row items-start lg:justify-start space-y-8 gap-8 lg:space-y-0 lg:space-x-8"
                >
                    <article
                        class="prose prose-gray order-2 lg:order-1 dark:prose-invert max-w-full lg:max-w-4xl w-full prose-code:before:content-none prose-code:after:content-none p-2 lg:px-4 bg-chaos-secondary lg:bg-transparent rounded-xl"
                    >
                        <ContentRenderer :value="doc" />
                        <nav
                            key="navigation"
                            class="lg:flex flex-row items-center justify-between"
                        >
                            <NuxtLink
                                v-if="prev"
                                :to="prev._path"
                                class="p-2 flex flex-col space-y-2 lg:border-gray-700 border rounded-xl no-underline"
                            >
                                <span class="text-sm text-left">Prev</span>

                                <span
                                    class="text-chaos-foreground text-left"
                                    >{{ prev.title }}</span
                                >
                            </NuxtLink>
                            <NuxtLink
                                v-if="next"
                                :to="next._path"
                                class="p-2 flex flex-col space-y-2 lg:border-gray-700 border rounded-xl no-underline"
                            >
                                <span class="text-sm text-right">Next</span>
                                <span
                                    class="text-chaos-foreground text-right"
                                    >{{ next.title }}</span
                                >
                            </NuxtLink>
                        </nav>
                    </article>
                    <BlogTableOfContents
                        :content="doc.body.toc.links"
                        class="order-1 lg:order-2 text-left"
                    />
                </div>
            </template>
            <template #not-found>
                <div>Invalid article</div>
            </template>
        </ContentDoc>
    </article>
</template>

<style lang="postcss">
    /* Customize headers to remove default underline */
    .prose h1 {
        @apply text-chaos-foreground;
        &:hover {
            @apply text-zinc-600 dark:text-chaos-foreground;
        }
    }
    .prose h2 a {
        @apply no-underline transition duration-500 ease-in-out block font-bold border-b border-neutral-600 dark:border-neutral-300;
        &:hover {
            @apply text-zinc-600 dark:text-chaos-foreground;
        }
    }
    .prose h3 a {
        @apply font-semibold no-underline;
    }
</style>
<script setup lang="ts">
    const { next, prev } = useContent();
    console.log(next, prev);
    const route = useRoute()

    const paths = route.path.split("/")
    const parent = paths.slice(0, paths.length - 1).join("/")
    function pleaseLog(x) {
        console.log(x.value)
    }
</script>
