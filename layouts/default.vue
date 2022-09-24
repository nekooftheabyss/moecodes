<template>
    <div
        class="min-h-screen flex flex-col items-center relative dark:bg-chaos-darker dark:text-white tracking-wide overflow-x-hidden break-words"
    >
        <!--        <div class = "fixed -bottom-24 -right-24 bg-chaos-tertiary w-96 h-96 blur-2xl rounded-full opacity-60" />-->
        <LayoutHeader />
        <main
            class="flex z-0 flex-col flex-1 max-w-fit lg:max-w-10xl mx-auto w-full py-12 mt-24 px-2"
        >
            <slot />
        </main>
        <LayoutFooter />
    </div>
</template>
