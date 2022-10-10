<template>
    <div :class="`${active ? 'block' : 'hidden'} overflow-x-auto`">
        <ContentSlot :use="$slots.default" unwrap="p" />
    </div>
</template>

<script setup>
    const { label, active } = defineProps(["label", "active"]);
</script>
