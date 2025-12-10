<script setup lang="ts">
import { name } from "@/constants/base-info";

defineProps<{ loading?: boolean }>();
</script>

<template>
  <transition name="fade">
    <div
      v-if="loading"
      class="fixed inset-0 z-9999 bg-zinc-950 flex flex-col justify-center items-center"
    >
      <div class="relative mb-8">
        <div
          class="absolute inset-0 bg-gold-500/20 blur-2xl rounded-full animate-pulse"
        ></div>

        <h1
          class="relative text-4xl md:text-6xl text-center font-bold text-slate-300 tracking-wide"
        >
          {{ name }}
        </h1>
      </div>

      <v-progress-circular
        indeterminate
        color="#EAA007"
        :size="60"
        :width="5"
        class="mb-4"
      />

      <p
        class="text-[10px] text-gold-500/70 font-mono uppercase tracking-[0.2em] animate-pulse"
      >
        Loading ...
      </p>
    </div>
  </transition>
</template>
