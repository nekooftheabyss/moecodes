<template>
    <header class="fixed top-0 left-0 w-full bg-chaos-darker flex flex-row p-2">
        <div
            class="flex flex-col lg:flex-row items-center max-w-10xl mx-auto w-full justify-between"
        >
            <section id="search" class="relative">
                <div
                    class="bg-chaos-primary text-chaos-foreground border-chaos-tertiary rounded-xl h-12 p-1 flex flex-row items-center justify-between"
                >
                    <input
                        type="text"
                        v-model="searchQuery"
                        class="bg-transparent w-72 p-2"
                        placeholder="Search for something"
                    />
                    <button class="p-2" @click="resetSearchQuery">
                        <span :class="`sr-only`">Open menu</span>
                        <svg
                            :class="`w-4 block text-white stroke-1`"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="white"
                            viewBox="0 0 8 8"
                        >
                            <g>
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    :d="`M0 8 L8 0`"
                                />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    :d="`M0 0 L8 8`"
                                />
                            </g>
                        </svg>
                    </button>
                </div>
                <div
                    :class="`absolute top-16 w-72 bg-chaos-primary rounded-xl border-chaos-tertiary border-1 transition-all duration-500 ease-in-out ${
                        searchQuery
                            ? 'max-h-[30rem] overflow-y-auto'
                            : 'max-h-0 overflow-y-hidden'
                    }`"
                >
                    <div
                        v-for="result in results"
                        :key="result.title"
                        class="hover:bg-chaos-secondary transition duration-500 ease-in-out overflow-ellipsis p-2"
                    >
                        <a class="block" :href="result.path">{{
                            result.title
                        }}</a>
                    </div>
                </div>
            </section>
            <section
                id="nav"
                class="p-2 flex lg:flex-row flex-col lg:items-center gap-4"
            >
                <a href="/">
                    <button
                        class="block py-2 px-4 hover:bg-chaos-primary transition-all duration-500 ease-in-out border-b-2 border-transparent hover:border-chaos-foreground"
                    >
                        Home
                    </button>
                </a>
            </section>
        </div>
    </header>
</template>

<script setup>
    const searchQuery = ref("");
    const resetSearchQuery = () => (searchQuery.value = "");
    const nav = await fetchContentNavigation();

    const _data = [];

    function fetchRecursively(arr) {
        for (const x of arr) {
            //            console.log(x)
            _data.push({ title: x.title, path: x._path });
            if (x.children) fetchRecursively(x.children);
        }
    }
    fetchRecursively(nav);

    const data = _data
        .filter((x, i) => _data.findIndex((n) => n.title === x.title) === i)
        .filter((x) => x.path.split("/").length > 3);

    const results = computed(() =>
        data.filter((x) =>
            x.title.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
    );
</script>
