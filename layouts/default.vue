<template>
    <div
        class="min-h-screen lg:h-screen flex flex-col items-center relative dark:bg-zinc-900 dark:text-white tracking-wide overflow-x-hidden break-words"
    >
        <!--        <div class = "fixed -bottom-24 -right-24 bg-chaos-tertiary w-96 h-96 blur-2xl rounded-full opacity-60" />-->
        <LayoutHeader />
        <main
            class="flex z-0 flex-col lg:flex-row flex-1 max-w-fit lg:max-w-9xl mx-auto w-full pb-12 px-2"
        >
            <aside
                class="hidden lg:flex flex-col lg:flex-shrink-0 items-start space-y-8 border-r border-zinc-600 pt-8 lg:h-[75vh] overflow-y-auto pr-2 w-full lg:w-64"
            >
                <ContentNavigation v-slot="{ navigation }">
                    <div
                        v-for="link of navigation.reduce((acc: any[], v: any) => acc.concat(v.children), []).filter(x => x && x?._path.includes(parent))"
                        :key="link._path"
                    >
                        <h2 class="font-semibold text-lg">{{ link.title }}</h2>
                        <ul
                            class="py-2 flex flex-col items-start space-y-8 text-sm"
                            v-if="link.children?.length"
                        >
                            <li
                                v-for="child in link.children"
                                :key="child._path"
                                :class="`${
                                    child._path === route.path
                                        ? `font-bold underline`
                                        : ``
                                } text-chaos-foreground`"
                            >
                                <NuxtLink :to="child._path">{{
                                    child.title
                                }}</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </ContentNavigation>
            </aside>
            <slot />
        </main>
        <LayoutFooter />
    </div>
</template>
<script setup lang="ts">
    const route = useRoute();

    const paths = route.path.split("/");
    const parent = paths.slice(0, paths.length - 1).join("/");
    function pleaseLog(x) {
        console.log(x.value);
    }
</script>
