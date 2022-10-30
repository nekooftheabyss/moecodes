<template>
  <div
    class="
      dark:bg-zinc-900/20
      bg-transparent
      text-zinc-900
      dark:text-white
      md:h-48
      p-8
      flex flex-col space-y-8
      items-center
    "
  >
    <hr class="max-w-6xl border border-zinc-900 dark:border-chaos-foreground w-full" />
    <div
      class="
        max-w-6xl
        flex flex-col
        md:flex-row
        text-center
        md:text-left
        justify-between
        space-y-4
        md:space-y-0
        items-start
        w-full
      "
    >
      <div class="p-2 flex flex-col space-y-4 items-start">
        <div class="text-2xl font-black">Neko Of The Abyss</div>
        <span
          class="flex flex-row items-center stroke-zinc-900 dark:stroke-chaos-foreground fill-transparent stroke-1 space-x-2"
        >
          <a
            href="https://nekooftheabyss.moe"
            target="_blank"
            class="font-semibold flex flex-row items-center"
          >
            <SVGGlobe />
          </a>
          <a
            href="https://facebook.com/NekoOfTheAbyss"
            target="_blank"
            class="font-semibold flex flex-row items-center"
          >
            <SVGFacebook />
          </a>
        </span>
      </div>
      <div
        class="
          p-2
          flex flex-col
          space-y-6
          items-start
          stroke-zinc-900 dark:stroke-chaos-foreground stroke-1
        "
      >
        <span
          class="font-bolder flex flex-row items-center"
        >
          <span class="font-semibold text-xl">Join us</span>
        </span>
        <div class="flex flex-col text-sm">
          <a
            href="https://discord.gg/A69vvdK"
            target="_blank"
            class="font-semibold flex flex-row items-center"
          >
            <span>Discord Server</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>