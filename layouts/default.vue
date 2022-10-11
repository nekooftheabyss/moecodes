<template>
    <div
        class="min-h-screen lg:h-screen flex flex-col items-center relative dark:bg-zinc-900 dark:text-white tracking-wide overflow-x-hidden break-words"
    >
        <!--        <div class = "fixed -bottom-24 -right-24 bg-chaos-tertiary w-96 h-96 blur-2xl rounded-full opacity-60" />-->
        <LayoutHeader />
        <main
            class="flex z-0 flex-col flex-1 max-w-fit lg:max-w-9xl mx-auto w-full pb-12 px-2"
        >
            <slot />
        </main>
        <LayoutFooter />
    </div>
</template>
<style>
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
    .page-enter-active,
    .page-leave-active {
        transition: opacity 0.5s;
        transition-property: background-color, border-color, color, fill, stroke,
            opacity, box-shadow, transform, filter, backdrop-filter;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 169ms;
    }
    .page-enter,
    .page-leave-active {
        opacity: 0;
        transition-duration: 420ms;
    }
</style>
<script setup lang="ts">
    const route = useRoute();

    const paths = route.path.split("/");
    const parent = paths.slice(0, paths.length - 1).join("/");
    function pleaseLog(x) {
        console.log(x.value);
    }
</script>
