<script setup lang="ts">
import { technicalStack } from "@/constants/technical-stack";
</script>

<template>
  <div>
    <h2 class="text-gold-500 font-semibold mb-2 text-xl">Technical stack</h2>
    <div
      class="grid lg:grid-cols-8 gap-4 *:bg-zinc-700/50 *:hover:bg-zinc-700 *:p-2 *:pb-4 *:rounded-lg"
    >
      <div v-for="(group, g) in technicalStack" :key="g" :class="group.class">
        <h3 class="font-semibold mb-2 text-center">
          {{ group.title }}
        </h3>
        <div div class="flex gap-2 justify-center flex-wrap">
          <div
            v-for="(item, i) in group.items"
            :key="i"
            class="w-18 p-2 rounded-lg bg-linear-to-b from-zinc-800 to-zinc-700 hover:shadow-lg shadow-white/20"
          >
            <component :is="item.icon" class="w-13 h-13 m-auto" />
            <h4 class="text-xs font-bold text-center mt-4 h-8">
              {{ item.name }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
