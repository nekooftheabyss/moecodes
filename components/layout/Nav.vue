<template>
    <aside
        class="flex flex-col lg:flex-shrink-0 items-start space-y-8 lg:border-r border-zinc-600 pt-8 h-screen lg:h-[75vh] overflow-y-auto pr-2 w-full lg:w-64"
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
</template>

<script setup lang="ts">
const toggleNav = ref(false)
    const route = useRoute();

    const paths = route.path.split("/");
    const parent = ["guides", "l", "blog"].includes(paths.at(-1).toLowerCase()) ? paths.join("/") : paths.slice(0, paths.length - 1).join("/");
</script>
