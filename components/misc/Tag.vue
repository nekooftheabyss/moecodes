<template>
    <span
        class="text-chaos-darker bg-chaos-foreground text-xs py-0.5 px-1 rounded-sm flex items-center space-x-1"
    >
        <span class="align-middle table-cell"><slot /></span>
        <button class="text-sm flex items-center" @click="$emit(`delete`)">
            <span class="sr-only">×</span>
            <svg
                :class="`w-4 block text-white stroke-1 stroke-chaos-darker`"
                width="6" height="6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
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
    </span>
</template>
<script setup lang="ts">
    const emit = defineEmits<{ (e: "delete"): void }>();
</script>
