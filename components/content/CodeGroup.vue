<template>
    <div class="rounded-t-md bg-zinc-800 p-2">
        <div class="text-sm text-white relative">
            <button
                v-for="(label, i) in labelsSplit"
                :key="label"
                :class="`px-4 py-3 text-gray-400 font-bold font-mono transition-all duration-500 ease-in-out border-b ${
                    activeTabIndex === i
                        ? 'active border-chaos-foreground'
                        : 'border-transparent'
                }`"
                @click="updateTabs(i)"
            >
                {{ label }}
            </button>
        </div>
        <div ref="blocks">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
    const tabs = ref<HTMLCollection>();
    const activeTabIndex = ref(0);
    watch(activeTabIndex, (newValue, oldValue) => switchTab(newValue));
    const blocks = ref<HTMLElement>();

    onMounted(() => {
        tabs.value = (blocks.value as HTMLElement).children;
    });
    const { labels } = defineProps<{ labels: string }>();
    const labelsSplit = labels.split(";");
    function switchTab(i: number) {
        let n = 0;
        while (n < (tabs.value as HTMLCollection).length) {
            ((tabs.value as HTMLCollection).item(n) as Element).className = "hidden";
            n += 1;
        }
       ((tabs.value as HTMLCollection).item(i) as Element).className = "block";
    }
    function updateTabs(i: number) {
        try {
        activeTabIndex.value = i;
        }
        catch(e) {console.error(e)}
    }
</script>
