<template>
    <NuxtLayout>
        <article class="mx-auto flex flex-col items-center space-y-8">
            <ContentDoc v-slot="{ doc }">
                <div
                    class="flex flex-col text-justify md:flex-row items-start max-w-7xl mx-auto md:justify-start space-y-8 gap-8 md:space-y-0 lg:space-x-8"
                >
                    <article
                        class="prose prose-gray order-2 dark:prose-invert max-w-full lg:max-w-prose prose-code:before:content-none prose-code:after:content-none p-2 lg:px-4 rounded-xl"
                    >
                        <ContentRenderer :value="doc" />
                    </article>
                </div>
            </ContentDoc>
            <nav>
                <ContentNavigation v-slot="{ navigation }">
                    <div
                        v-for="link of navigation.find((x) => x.title === `L`)
                            .children"
                        :key="link._path"
                    >
                        <h2 class="font-semibold text-xl">{{ link.title }}</h2>
                        <ul class="p-2" v-if="link.children?.length">
                            <li
                                v-for="child in link.children"
                                :key="child._path"
                                class="text-chaos-foreground"
                            >
                                <NuxtLink :to="child._path">{{
                                    child.title
                                }}</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </ContentNavigation>
            </nav>
        </article>
    </NuxtLayout>
</template>

<style lang="postcss">
    /* Customize headers to remove default underline */
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
<script></script>
