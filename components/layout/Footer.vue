<template>
    <footer class="p-4 w-full">
        <div
            :class="`border-t ${
                layoutStore.hoverFooterLogo
                    ? `border-chaos-foreground`
                    : `border-zinc-600`
            } w-full py-4 relative transition-colors duration-500 ease-in-out`"
        >
            <div
                class="absolute inset-x-0 -top-4 flex justify-center items-start"
            >
                <div class="relative flex justify-center items-center group">
                    <div
                        class="absolute bg-zinc-900 rounded-full blur-md w-16 h-16 group-hover:animate-pulse group-hover:scale-110 transition duration-500 ease-in-out transform"
                    />
                    <MiscLogo
                        :size="`32`"
                        :gray="false"
                        :eye-closed="false"
                        :left="false"
                        :class="`${
                            layoutStore.hoverFooterLogo
                                ? `grayscale-0`
                                : `grayscale`
                        } transition duration-500 ease-in-out cursor-help`"
                        @mouseover="() => (layoutStore.hoverFooterLogo = true)"
                        @mouseleave="
                            () => (layoutStore.hoverFooterLogo = false)
                        "
                        @touchstart="() => (layoutStore.hoverFooterLogo = true)"
                        @touchend="() => (layoutStore.hoverFooterLogo = false)"
                    />
                </div>
            </div>
            <div class="flex items-center justify-center max-w-7xl mx-auto">
                <div class="flex-1 space-y-4 md:space-y-0 md:space-x-4">
                    <span>
                        Copyright
                        <a
                            href="/"
                            class="font-bold text-chaos-tertiary dark:text-chaos-foreground"
                        >
                            2022 Moecodes
                        </a>
                    </span>
                </div>
                <div
                    class="flex-initial mt-3 sm:mt-0 dark:text-chaos-foreground"
                >
                    <a
                        href="https://github.com/nekooftheabyss"
                        target="_blank"
                        class="font-semibold"
                    >
                        Neko of the Abyss
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>
<script setup lang="ts">
    const layoutStore = useLayoutStore();
</script>
