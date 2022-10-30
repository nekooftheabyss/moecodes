<template>
  <div class="p-4 w-full">
    <div
      class="
        w-full
        p-4
        rounded-xl
        mx-auto
        h-full
        block
        bg-opacity-20
        transform
        tracking-wide
        transition
        duration-500
        ease-in-out
        group
        hover:-translate-y-1 hover:scale-110
      "
    >
      <NuxtLink v-if="link.startsWith('/')" :to="link" class="p-4">
        <div class="flex flex-col items-center w-full">
          <img
            :src="image"
            class="w-full md:h-48 md:w-48 object-cover rounded-full"
            :alt="title"
          />
        </div>
        <span class="flex-grow p-2 px-8">
          <p class="text-3xl font-bold pt-3 text-center">
            {{ title }}
          </p>
          <div class="py-3 text-center">
            {{ description }}
          </div>
        </span>
      </NuxtLink>
      <a v-else :href="link" class="p-4">
        <div class="flex flex-col items-center w-full">
          <img
            :src="image"
            class="w-full md:h-48 md:w-48 object-cover rounded-full"
            alt="Abyss"
          />
        </div>
        <span class="flex-grow p-2 px-8">
          <p class="text-3xl font-bold pt-3 text-center">
            {{ title }}
          </p>
          <div class="py-3 text-center">
            {{ description }}
          </div>
        </span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default() {
        return `The Endless Void`;
      },
    },
    description: {
      type: String,
      default() {
        return `The Endless Void`;
      },
    },
    image: {
      type: String,
      default() {
        return `/icon.webp`;
      },
    },
    link: {
      type: String,
      default() {
        return `/`;
      },
    },
  },
};
</script>