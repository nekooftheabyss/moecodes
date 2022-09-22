<template>
    <div class="code-group">
        <div class="rounded-t-md bg-chaos-primary text-sm text-white relative">
            <button
                v-for="({}, i) in tabs"
                :key="labelsSplit[i] || `label_${i}`"
                :class="`px-4 py-3 text-gray-400 font-bold font-mono ${
                    activeTabIndex === i
                        ? 'active border-b border-chaos-foreground'
                        : ''
                }`"
                @click="updateTabs(i)"
            >
                {{ labelsSplit[i] }}
            </button>
        </div>
        <div ref="blocks">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
    const tabs = ref([]);
    const activeTabIndex = ref(0);
    watch(activeTabIndex, (newValue, oldValue) => switchTab(newValue));
    const blocks = ref();

    onMounted(() => {
        tabs.value = blocks.value.children;
    });
    const { labels } = defineProps<{ labels: string }>();
    const labelsSplit = labels.split(" ");
    function switchTab(i) {
        tabs.value.forEach((tab) => {
            (tab as HTMLElement).style.display = "none";
        });
        (tabs.value[i] as HTMLElement).style.display = "block";
    }
    function updateTabs(i: number) {
        activeTabIndex.value = i;
    }
</script>
<style scoped>
    button {
        outline: none;
    }
    .highlight-underline {
        bottom: -2px;
        height: 2px;
        transition: left 150ms, width 150ms;
    }
    /*  .code-group ::v-deep {
    & pre[class*="language-"] {
      @apply rounded-t-none mt-0;
    }
  }*/
</style>
