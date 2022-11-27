<template>
    <NuxtLayout>
        <div class="flex flex-col space-y-96 lg:space-y-108 w-full pt-24">
            <!-- HERO -->
            <div class="flex flex-col space-y-96 lg:space-y-108">
                <div
                    ref="item1"
                    class="text-4xl lg:text-6xl font-extrabold text-center text-zinc-900 dark:text-chaos-foreground"
                >
                    Gaze into the abyss.
                </div>
                <div
                    ref="item2"
                    class="text-4xl lg:text-6xl font-extrabold text-center text-zinc-900 dark:text-white"
                >
                    Does the abyss really gaze back at you?
                </div>
                <div
                    ref="item3"
                    class="text-4xl lg:text-6xl font-extrabold text-center text-zinc-900 dark:text-chaos-foreground"
                >
                    It is probably the mysterious cat that resides in it.
                </div>
                <div
                    ref="item4"
                    class="w-full flex flex-row justify-between items-center space-x-4 opacity-70"
                >
                    <img
                        src="/eye/Neko_L.svg"
                        class="w-36 md:w-72 lg:w-96 animate-pulse"
                        alt="Right eye of the mysterious neko"
                    />
                    <img
                        src="/eye/Neko_R.svg"
                        class="w-36 md:w-72 lg:w-96 animate-pulse"
                        alt="Left eye of the mysterious neko"
                    />
                </div>
            </div>
            <div class="p-8">
                <div class="text-4xl lg:text-6xl font-extrabold text-center">
                    There are two routes ahead of you.
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CardChoice
                    title="Site Index"
                    description="Too lazy to write proper UI."
                    image="/neko.svg"
                    link="/l"
                />
                <CardChoice
                    title="Pranev"
                    description="The dude that owns Neko Of The Abyss."
                    image="/nett.png"
                    link="https://nett.moe"
                />
            </div>
        </div>
    </NuxtLayout>
</template>
<script setup>
    definePageMeta({
        title: "Home",
        layout: "landing",
    });
</script>
