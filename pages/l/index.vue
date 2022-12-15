<template>
    <NuxtLayout>
        <article class="lg:flex flex-1 py-8">
            <ul class="list-disc flex flex-col space-y-4">
                <li
                    v-for="n in nav.find((x) => x.title.toLowerCase() === `l`)
                        ?.children"
                    :key="n._path"
                    class="text-chaos-foreground"
                >
                    <a :href="`${n._path}/list`">{{ n.title }}</a>
                </li>
            </ul>
        </article>
    </NuxtLayout>
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
    const route = useRoute();
    const nav = await fetchContentNavigation();
    console.log(nav);

    const paths = route.path.split("/");
    const parent = paths.slice(0, paths.length - 1).join("/");
    function pleaseLog(x: any) {
        console.log(x.value);
    }
</script>
