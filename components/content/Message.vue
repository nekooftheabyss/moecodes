<template>
    <div
        :class="`${
            type === 'success'
                ? 'bg-black/20 text-green-200 border-l-2 border-green-800'
                : type === 'info'
                ? 'bg-black/20 text-blue-200 border-l-2 border-blue-800'
                : type === 'warning'
                ? 'bg-black/20 text-yellow-200 border-l-2 border-yellow-800'
                : type === 'error'
                ? 'bg-black/20 text-red-200 border-l-2 border-red-800'
                : type === 'gray'
                ? 'bg-black/20 text-gray-200 border-l-2 border-gray-800'
                : 'bg-black/20 text-purple-200 border-l-2 border-purple-800'
        }`"
    >
        <div class="p-2">
            <ContentSlot :use="$slots.default" unwrap="p" />
        </div>
    </div>
</template>

<script setup lang="ts">
    type messageType = "success" | "info" | "warning" | "error" | "gray";
    const { type } = defineProps<{ type: messageType }>();
</script>
