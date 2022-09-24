<template>
    <div class="rounded-t-md bg-chaos-primary p-2">
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
        tabs.value = blocks.value.children;
    });
    const { labels } = defineProps<{ labels: string }>();
    const labelsSplit = labels.split(" ");
    function switchTab(i) {
        let n = 0;
        while (n < tabs.value.length) {
            tabs.value.item(n).className = "hidden";
            n += 1;
        }
        tabs.value.item(i).className = "block";
    }
    function updateTabs(i: number) {
        try {
        activeTabIndex.value = i;
        }
        catch(e) {console.error(e)}
    }
</script>
