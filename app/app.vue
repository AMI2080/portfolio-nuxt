<script setup lang="ts">
import { LinkedinIcon } from "@/components/icons";
import AppLoader from "@/components/AppLoader.vue";
import SpeedContact from "@/components/SpeedContact.vue";
import TechStack from "@/components/TechStack.vue";
import {
  bio,
  name,
  subtitle,
  title,
  engineeringPhilosophy,
} from "@/constants/base-info";
import { footer } from "@/constants/footer";

const loading = ref(true);

onMounted(() => {
  loading.value = false;
});
</script>

<template>
  <div
    class="page-container min-h-screen text-slate-300 font-sans selection:bg-gold-500/30 selection:text-gold-200 **:duration-400 cursor-default flex flex-col"
    :class="{ 'overflow-hidden h-screen': loading }"
  >
    <app-loader :loading />

    <template v-if="!loading">
      <div class="py-10 px-4 flex justify-center items-center grow gap-6">
        <main
          class="w-full max-w-7xl grid grid-cols-1 xl:grid-cols-[512px_1fr] grid-rows-[auto_1fr] gap-6 [&_.card]:bg-zinc-800 [&_.card]:rounded-2xl [&_.card]:border [&_.card]:border-gold-500/40 [&_.card]:shadow-lg [&_.card]:shadow-gold-300/10 [&_.card]:p-4 [&_.card]:md:p-4 [&_.card]:hover:bg-zinc-800/70"
        >
          <div class="grid relative md:grid-cols-2 grid-rows-[auto_1fr] gap-6">
            <div
              class="card flex gap-4 items-center [&.card]:md:ps-48 md:col-span-2 bg-linear-to-br from-gold-500/10 to-transparent text-sm"
            >
              <div class="flex items-end h-full -ms-2 -mb-8 md:hidden">
                <img
                  src="./assets/image/abdelrhman.png"
                  alt="image"
                  class="max-w-40"
                />
              </div>
              <div class="space-y-1 w-full">
                <h1 class="text-2xl font-bold text-gold-500" v-text="name" />
                <h2 class="text-slate-100 font-medium" v-text="title" />
                <p class="relative leading-6">
                  {{ subtitle }}

                  <span class="w-8 inline-block" />
                  <v-btn
                    href="https://www.linkedin.com/in/abdelrhman-mohamed-ibrahem"
                    target="_blank"
                    color="var(--color-gold-500)"
                    variant="text"
                    class="h-auto min-w-auto p-0 absolute end-0"
                  >
                    <linkedin-icon />
                  </v-btn>
                </p>
              </div>
            </div>

            <div class="card hidden md:block">
              <img
                src="./assets/image/abdelrhman.png"
                alt="image"
                class="absolute bottom-px inset-x-0 max-w-[calc(50%-1rem)] max-h-full"
              />
            </div>

            <div class="card bg-linear-to-tl from-gold-500/10 to-transparent">
              <h3 class="text-slate-100 font-medium mb-2">
                {{ engineeringPhilosophy.title }}:
              </h3>
              <ul class="list-disc ms-4 text-sm">
                <li
                  v-for="(item, index) in engineeringPhilosophy.list"
                  :key="index"
                  v-text="item"
                />
              </ul>
            </div>
          </div>

          <tech-stack class="row-span-2 card order-1 xl:order-0" />

          <div class="card">
            <h3 class="mb-3">
              {{ bio.header }}
            </h3>
            <ul class="list-disc ms-4 text-sm">
              <li v-for="(item, index) in bio.list" :key="index">
                <span class="font-bold" v-text="item.label" />
                {{ item.content }}
              </li>
            </ul>
          </div>
        </main>
      </div>

      <footer class="border-t border-gold-500/40 p-4" v-html="footer" />
      <speed-contact />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.page-container {
  position: relative;
}

.page-container::before,
.page-container::after {
  content: "";
  position: absolute;
  inset: 0;
}

.page-container::before {
  background-image: linear-gradient(
    to bottom,
    var(--color-zinc-950),
    var(--color-zinc-900)
  );
  z-index: -2;
}

.page-container::after {
  background-image: url(./assets/image/texture.png);
  background-repeat: repeat;
  opacity: 0.4;
  z-index: -1;
}
</style>
