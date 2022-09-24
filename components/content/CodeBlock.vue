<template>
    <div :class="`${active ? 'block' : 'hidden'}`">
        <ContentSlot :use="$slots.default" unwrap="p" />
    </div>
</template>

<script setup>
    const { label, active } = defineProps(["label", "active"]);
</script>
