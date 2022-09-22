<template v-slot:[label]>
    <div :class="[isActive && 'active', 'code-block']">
        <ContentSlot :use="$slots.default" unwrap="p" />
    </div>
</template>

<script setup>
    const { label, active } = defineProps(["label", "active"]);
    const isActive = ref(active?.value || false  )
    function setActive(val) {
        isActive.value = val;
    }
    defineExpose({label, isActive, setActive});
</script>

<style scoped>
    .code-block {
        display: none;
    }
    .code-block.active {
        display: block;
    }
</style>
