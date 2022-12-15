<template>
    <header
        :class="`top-0 left-0 w-full bg-zinc-900 flex flex-row p-2 z-40 border-b ${layoutStore.hoverFooterLogo
                    ? `border-chaos-foreground`
                    : `border-zinc-600`} fixed lg:relative transition-color duration-500 ease-in-out`"
    >
        <div
            class="flex flex-row lg:items-center max-w-10xl mx-auto w-full justify-between"
        >
            <button
                :class="`
                    inline-flex
                    items-center
                    justify-center
                    p-2 lg:hidden
                    rounded-md
                  text-white focus:outline-none
        `"
                @click="toggleNav"
            >
                <span :class="`sr-only`">Open menu</span>
                <svg
                    :class="`block h-8 w-8 text-white stroke-2`"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="white"
                    viewBox="0 0 30 24"
                >
                    <g>
                        <path
                            :class="`transition-all duration-400 transform ease-in-out`"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            :d="navState ? `M4 6 L24 24` : `M4 6 L28 06`"
                        />
                        <path
                            :class="`transition-all duration-400 transform ease-in-out`"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            :d="navState ? `M4 6 L24 24` : `M4 14 L 20 14`"
                        />
                        <path
                            :class="`transition-all duration-400 transform ease-in-out`"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            :d="navState ? `M24 06 L 4 24` : `M04 22 L 12 22`"
                        />
                    </g>
                </svg>
            </button>

            <section id="search" class="relative">
                <div
                    class="bg-zinc-800 text-chaos-foreground border-chaos-tertiary rounded-xl h-12 p-1 flex flex-row items-center justify-between"
                >
                    <input
                        type="text"
                        v-model="searchQuery"
                        class="bg-transparent w-72 p-2 focus:outline-none"
                        placeholder="Search for something"
                    />
                    <button class="p-2" @click="resetSearchQuery">
                        <span :class="`sr-only`">Reset Search</span>
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
                    :class="`absolute top-16 w-full lg:w-72 bg-zinc-700 rounded-xl border-chaos-tertiary border-1 transition-all duration-500 ease-in-out ${
                        searchQuery
                            ? 'max-h-[30rem] overflow-y-auto'
                            : 'max-h-0 overflow-y-hidden'
                    }`"
                >
                    <div
                        v-for="result in results.sort((a, b) =>
                            a.title.localeCompare(b.title)
                        )"
                        :key="result.title"
                        class="hover:bg-zinc-500 transition duration-500 ease-in-out overflow-ellipsis p-2"
                    >
                        <a class="block" :href="result.path">{{
                            result.title
                        }}</a>
                    </div>
                </div>
            </section>
            <section
                id="nav"
                :class="`p-2 hidden lg:flex lg:flex-roww-full gap-4 relative lg:bg-transparent`"
            >
                <a href="/">
                    <button
                        class="block w-full py-2 px-4 hover:bg-zinc-900 transition-all duration-500 ease-in-out border-b-2 border-transparent hover:border-chaos-foreground"
                    >
                        Home
                    </button>
                </a>
                <a href="https://github.com/nekooftheabyss/moecodes">
                    <button
                        class="block w-full py-2 px-4 hover:bg-zinc-900 transition-all duration-500 ease-in-out border-b-2 border-transparent hover:border-chaos-foreground"
                    >
                        Contribute
                    </button>
                </a>
            </section>
            <section
                id="nav"
                :class="`p-2 flex lg:hidden flex-col lg:items-center overflow-y-auto min-h-screen w-full gap-4 absolute top-16 left-0 transition duration-500 ease-in-out bg-zinc-900 ${
                    navState ? 'translate-x-0' : '-translate-x-200'
                }`"
            >
                <LayoutNav class="lg:hidden" />
            </section>
        </div>
    </header>
</template>

<script setup>
    const layoutStore = useLayoutStore();

    const searchQuery = ref("");
    const resetSearchQuery = () => (searchQuery.value = "");
    const nav = await fetchContentNavigation();

    const _data = [];

    const navState = ref(false);

    const toggleNav = () => (navState.value = !navState.value);

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
