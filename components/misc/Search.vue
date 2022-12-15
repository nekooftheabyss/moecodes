<template>
    <div
        class="bg-zinc-800 text-chaos-foreground border-chaos-tertiary rounded-xl h-12 p-1 flex flex-row items-center justify-between"
    >
        <div class="flex flex-row items-center space-x-1">
            <MiscTag
                v-for="(tag, i) in currentTags"
                :key="`tagged_${tag}_${i}`"
                @delete="removeTag(i)"
                >{{ tag }}</MiscTag
            >
        </div>
        <input
            type="text"
            v-model="searchQuery"
            class="bg-transparent w-72 p-2 focus:outline-none"
            placeholder="Search for something"
        />
        <button
            class="p-2"
            @click="
                (_) => {
                    resetSearchQuery();
                    resetTags();
                }
            "
        >
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
        :class="`absolute top-16 w-full lg:w-96 bg-zinc-700 rounded-xl border-chaos-tertiary border-1 transition-all duration-500 ease-in-out ${
            searchQuery
                ? 'max-h-[30rem] overflow-y-auto'
                : 'max-h-0 overflow-y-hidden'
        }`"
    >
        <div
            v-for="result in results.sort((a, b) => a.localeCompare(b))"
            :key="`tag_${result}`"
            class="hover:bg-zinc-500 transition duration-500 ease-in-out overflow-ellipsis p-2"
            @click="addTag(result)"
        >
            <span>{{ result }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Tags from "@/data/Tags.js";
    const searchQuery = ref("");
    const resetSearchQuery = () => (searchQuery.value = "");
    //    const nav = await fetchContentNavigation();

    const currentTags = ref<string[]>([]);

    function addTag(tag: string) {
        currentTags.value.push(tag);
        resetSearchQuery()
    }
    function removeTag(i: number) {
        currentTags.value.splice(i, 1);
    }
    function resetTags() {
        currentTags.value = [];
    }

    const results = computed(() =>
        Tags.filter((x) =>
            x.toLowerCase().startsWith(searchQuery.value.toLowerCase()) && !currentTags.value.includes(x)
        )
    );
</script>
